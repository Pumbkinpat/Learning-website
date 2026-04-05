import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Code2, ShieldCheck, Info, ExternalLink, ChevronRight, ArrowLeft, Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface DocItem {
  id: string;
  label: string;
  desc: string;
  example: string;
  details?: {
    overview: string;
    points: string[];
    bestPractices: string[];
    warning?: string;
    infographic?: {
      type: 'flow' | 'hierarchy' | 'comparison';
      data: any;
    };
  };
}

const Infographic: React.FC<{ type: string; data: any }> = ({ type, data }) => {
  if (type === 'flow') {
    return (
      <div className="flex items-center justify-center gap-4 py-8 overflow-x-auto">
        {data.steps.map((step: string, i: number) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold">
                {i + 1}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">{step}</span>
            </div>
            {i < data.steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-slate-700 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (type === 'hierarchy') {
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-bold text-sm">
          {data.root}
        </div>
        <div className="w-px h-6 bg-slate-800" />
        <div className="flex gap-8">
          {data.children.map((child: string, i: number) => (
            <div key={i} className="flex flex-col items-center">
              <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-xs">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'comparison') {
    return (
      <div className="grid grid-cols-2 gap-4 py-8">
        {data.items.map((item: any, i: number) => (
          <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">{item.title}</h5>
            <ul className="space-y-2">
              {item.features.map((feature: string, j: number) => (
                <li key={j} className="text-[10px] text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-red-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export const Documentation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DocItem | null>(null);

  const sections = [
    {
      id: 'fundamentals',
      title: 'Java Fundamentals',
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      content: [
        {
          id: 'prog-structure',
          label: 'Cấu trúc chương trình',
          desc: 'Cấu trúc cơ bản của một file Java: package, import, class và main method.',
          example: 'package com.nab.bank;\n\nimport java.util.Scanner;\n\n/**\n * Lớp chính khởi chạy ứng dụng ngân hàng.\n */\npublic class Main {\n    // Điểm bắt đầu của mọi chương trình Java\n    public static void main(String[] args) {\n        System.out.println("Chào mừng đến với NAB Digital Banking");\n    }\n}',
          details: {
            overview: 'Một chương trình Java được tổ chức theo cấu trúc phân cấp chặt chẽ. Mọi mã nguồn phải nằm trong một Lớp (Class), và các lớp được nhóm lại trong các Gói (Packages). Điều này giúp quản lý hàng ngàn file code trong các dự án lớn tại NAB mà không bị trùng tên.',
            points: [
              'Package: Khai báo ở dòng đầu tiên. Giúp định danh duy nhất cho Class (ví dụ: com.nab.services.Payment).',
              'Import: Khai báo sau package. Dùng để "mượn" các công cụ từ thư viện khác (ví dụ: java.util.List).',
              'Class Definition: public class [TênFile] { ... }. Tên Class phải trùng khớp hoàn toàn với tên file .java.',
              'Main Method: Phương thức đặc biệt mà máy ảo Java (JVM) tìm kiếm để bắt đầu thực thi chương trình.'
            ],
            bestPractices: [
              'Luôn sử dụng Javadoc (/** ... */) để giải thích mục đích của Class.',
              'Tổ chức package theo chức năng nghiệp vụ (ví dụ: .auth, .payment, .account).',
              'Hạn chế sử dụng import * (wildcard), hãy import chính xác Class bạn cần.'
            ],
            infographic: {
              type: 'flow',
              data: {
                steps: ['Package (Địa chỉ)', 'Imports (Công cụ)', 'Class (Bản thiết kế)', 'Main (Nút khởi động)']
              }
            }
          }
        },
        {
          id: 'vars',
          label: 'Biến (Variables)',
          desc: 'Khai báo, gán giá trị và quy tắc đặt tên chuẩn NAB.',
          example: 'String customerId = "CUST-123";\nint retryCount = 0;\nfinal String BANK_NAME = "NAB";',
          details: {
            overview: 'Biến là các "ngăn chứa" dữ liệu trong bộ nhớ RAM. Trong Java, bạn phải khai báo kiểu dữ liệu cho ngăn chứa đó trước khi bỏ dữ liệu vào. Tại NAB, việc đặt tên biến rõ ràng là bắt buộc để đồng nghiệp có thể đọc hiểu code của bạn ngay lập tức.',
            points: [
              'Declaration (Khai báo): Tạo ra ngăn chứa (ví dụ: int score;).',
              'Initialization (Khởi tạo): Bỏ giá trị đầu tiên vào ngăn chứa (ví dụ: score = 100;).',
              'camelCase: Quy tắc đặt tên chuẩn (ví dụ: accountBalance, transactionDate).',
              'Scope (Phạm vi): Biến khai báo trong hàm chỉ tồn tại trong hàm đó (Local Variable).'
            ],
            bestPractices: [
              'Tên biến phải là danh từ, mô tả chính xác dữ liệu (ví dụ: use isAccountActive thay vì a).',
              'Sử dụng tiền tố "is" hoặc "has" cho các biến kiểu boolean.',
              'Khai báo biến final cho các giá trị không bao giờ thay đổi sau khi gán.'
            ],
            infographic: {
              type: 'hierarchy',
              data: {
                root: 'Variable Scopes',
                children: ['Local (Trong hàm)', 'Instance (Trong đối tượng)', 'Static (Toàn cục)']
              }
            }
          }
        },
        {
          id: 'data-types',
          label: 'Kiểu dữ liệu',
          desc: 'Primitive types vs Reference types trong Java.',
          example: 'long balance = 1000000L;\nboolean isVip = true;\nString name = "David";',
          details: {
            overview: 'Java chia dữ liệu thành 2 nhóm chính: Kiểu nguyên thủy (Primitive) lưu giá trị đơn giản và Kiểu tham chiếu (Reference) lưu địa chỉ của các đối tượng phức tạp.',
            points: [
              'Số nguyên: byte (8-bit), short (16-bit), int (32-bit), long (64-bit).',
              'Số thực: float, double (Dùng cho tính toán khoa học).',
              'Logic: boolean (chỉ nhận true hoặc false).',
              'Ký tự: char (lưu một ký tự Unicode duy nhất).'
            ],
            bestPractices: [
              'Dùng int cho hầu hết các số đếm, dùng long cho các ID hoặc số lượng cực lớn.',
              'BẮT BUỘC: Không dùng float/double cho tiền tệ, hãy dùng BigDecimal.',
              'Hiểu rõ sự khác biệt giữa gán giá trị (Primitive) và gán địa chỉ (Reference).'
            ],
            infographic: {
              type: 'comparison',
              data: {
                items: [
                  { title: 'Primitive', features: ['Lưu trên Stack', 'Truy cập cực nhanh', 'Giá trị mặc định là 0/false'] },
                  { title: 'Reference', features: ['Lưu trên Heap', 'Linh hoạt, có phương thức', 'Giá trị mặc định là null'] }
                ]
              }
            }
          }
        },
        {
          id: 'operators',
          label: 'Toán tử (Operators)',
          desc: 'Các toán tử số học, so sánh và logic.',
          example: 'int total = price * quantity;\nif (age >= 18 && hasId) {\n    canOpenAccount = true;\n}',
          details: {
            overview: 'Toán tử là các ký hiệu dùng để thực hiện tính toán hoặc so sánh. Trong các hệ thống ngân hàng, toán tử logic (&&, ||) được dùng dày đặc để kiểm tra các điều kiện giao dịch.',
            points: [
              'Arithmetic: +, -, *, /, % (chia lấy dư - hữu ích để kiểm tra số chẵn/lẻ).',
              'Comparison: == (so sánh bằng), != (khác), >, <, >=, <=.',
              'Logical: && (VÀ - cả 2 đúng), || (HOẶC - 1 trong 2 đúng), ! (PHỦ ĐỊNH).',
              'Assignment: =, +=, -= (ví dụ: x += 5 tương đương x = x + 5).'
            ],
            bestPractices: [
              'Sử dụng ngoặc đơn () để kiểm soát thứ tự ưu tiên (ví dụ: (a + b) * c).',
              'Tránh viết các biểu thức quá dài trên một dòng, hãy chia nhỏ ra các biến trung gian.',
              'Cẩn thận với toán tử == khi so sánh String (hãy dùng .equals()).'
            ]
          }
        }
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow & Arrays',
      icon: <Book className="w-5 h-5 text-red-500" />,
      content: [
        {
          id: 'conditions',
          label: 'Điều kiện (Conditions)',
          desc: 'Phân luồng chương trình với if-else và switch-case.',
          example: 'if (amount > 5000) {\n    requireManagerApproval();\n} else if (amount > 0) {\n    processAutomatically();\n} else {\n    rejectTransaction();\n}',
          details: {
            overview: 'Cấu trúc điều kiện là "bộ não" của chương trình, giúp đưa ra quyết định dựa trên dữ liệu đầu vào. Ví dụ: Nếu số dư đủ thì cho rút tiền, ngược lại thì báo lỗi.',
            points: [
              'if-else: Linh hoạt nhất, dùng cho mọi loại so sánh logic.',
              'switch-case: Tối ưu khi so sánh một biến với nhiều giá trị hằng số (ví dụ: mã tiền tệ).',
              'Ternary: Cách viết tắt if-else cho các gán giá trị đơn giản (ví dụ: status = (age > 18) ? "Adult" : "Minor").'
            ],
            bestPractices: [
              'Luôn có khối else để xử lý các trường hợp ngoại lệ không mong muốn.',
              'Trong switch-case, đừng bao giờ quên từ khóa break, nếu không code sẽ chạy xuyên qua các case tiếp theo.',
              'Hạn chế lồng quá nhiều tầng if-else (Nested If), hãy dùng kỹ thuật "Guard Clauses".'
            ],
            infographic: {
              type: 'flow',
              data: {
                steps: ['Kiểm tra (If)', 'Đúng -> Thực thi A', 'Sai -> Kiểm tra tiếp (Else If)', 'Tất cả sai -> Thực thi B (Else)']
              }
            }
          }
        },
        {
          id: 'loops',
          label: 'Vòng lặp (Loops)',
          desc: 'Lặp lại các thao tác với for, while và do-while.',
          example: 'for (Transaction tx : transactions) {\n    totalAmount = totalAmount.add(tx.getAmount());\n}',
          details: {
            overview: 'Vòng lặp giúp thực hiện các công việc lặp đi lặp lại một cách tự động. Ví dụ: Duyệt qua danh sách 1000 giao dịch để tính tổng tiền.',
            points: [
              'for: Dùng khi bạn biết chính xác số lần cần lặp (ví dụ: lặp 12 tháng).',
              'while: Dùng khi lặp dựa trên một điều kiện (ví dụ: lặp cho đến khi người dùng nhập đúng mật khẩu).',
              'do-while: Giống while nhưng đảm bảo code chạy ít nhất 1 lần trước khi kiểm tra điều kiện.',
              'for-each: Cách hiện đại và an toàn nhất để duyệt qua mảng hoặc danh sách.'
            ],
            bestPractices: [
              'Luôn đảm bảo điều kiện dừng của vòng lặp sẽ xảy ra để tránh "Vòng lặp vô tận" làm treo máy.',
              'Sử dụng for-each bất cứ khi nào bạn không cần quan tâm đến chỉ số (index) của phần tử.',
              'Dùng break để thoát vòng lặp sớm và continue để bỏ qua lần lặp hiện tại.'
            ]
          }
        },
        {
          id: 'arrays',
          label: 'Mảng (Arrays)',
          desc: 'Lưu trữ danh sách các phần tử cùng kiểu dữ liệu.',
          example: 'String[] branchCodes = {"VN001", "VN002", "VN003"};\nint firstCode = branchCodes[0]; // Lấy phần tử đầu tiên',
          details: {
            overview: 'Mảng là một dãy các "ô" liên tiếp trong bộ nhớ, mỗi ô chứa một giá trị cùng kiểu. Mảng có kích thước cố định ngay khi tạo ra.',
            points: [
              'Index: Vị trí của phần tử, bắt đầu từ 0. Phần tử cuối cùng có index là length - 1.',
              'Length: Thuộc tính cho biết số lượng phần tử trong mảng.',
              'Fixed Size: Một khi đã khai báo mảng có 10 phần tử, bạn không thể thêm phần tử thứ 11.',
              'Default Values: Mảng số khởi tạo là 0, mảng đối tượng khởi tạo là null.'
            ],
            bestPractices: [
              'Luôn kiểm tra index có nằm trong khoảng [0, length-1] không để tránh lỗi ArrayIndexOutOfBoundsException.',
              'Sử dụng mảng khi số lượng phần tử là cố định và đã biết trước.',
              'Dùng System.arraycopy() hoặc Arrays.copyOf() để sao chép mảng hiệu quả.'
            ]
          }
        }
      ]
    },
    {
      id: 'methods-oop',
      title: 'Methods & OOP',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      content: [
        {
          id: 'methods',
          label: 'Hàm (Methods)',
          desc: 'Định nghĩa các khối mã có thể tái sử dụng.',
          example: 'public BigDecimal calculateInterest(BigDecimal balance, double rate) {\n    return balance.multiply(BigDecimal.valueOf(rate));\n}',
          details: {
            overview: 'Hàm là các "đoạn code đóng gói" thực hiện một nhiệm vụ cụ thể. Thay vì viết lại logic tính lãi suất ở 10 nơi, bạn viết 1 hàm và gọi nó 10 lần.',
            points: [
              'Parameters (Tham số): Dữ liệu đầu vào cho hàm.',
              'Return Type: Kiểu dữ liệu mà hàm trả về (nếu không trả về gì dùng void).',
              'Signature: Bao gồm tên hàm và danh sách tham số. Giúp JVM phân biệt các hàm.',
              'Pass-by-value: Java luôn truyền giá trị của biến vào hàm, không truyền chính biến đó.'
            ],
            bestPractices: [
              'Nguyên tắc "Do One Thing": Một hàm chỉ nên làm một việc duy nhất và làm thật tốt.',
              'Tên hàm phải là động từ, thể hiện hành động (ví dụ: processPayment, validateUser).',
              'Giữ hàm ngắn gọn (thường dưới 20 dòng code) để dễ bảo trì.'
            ]
          }
        },
        {
          id: 'oop-basics',
          label: 'OOP cơ bản',
          desc: 'Lớp, đối tượng và 4 trụ cột của OOP.',
          example: 'Customer david = new Customer("David");\ndavid.addAccount(new SavingsAccount());',
          details: {
            overview: 'OOP là cách tư duy lập trình mô phỏng thế giới thực. Class là "bản thiết kế" (ví dụ: Bản thiết kế xe hơi), còn Object là "thực thể" (ví dụ: Chiếc xe hơi cụ thể đang chạy ngoài đường).',
            points: [
              'Encapsulation: Giấu dữ liệu nhạy cảm (balance) và chỉ cho truy cập qua các hàm an toàn (deposit).',
              'Inheritance: Lớp con thừa hưởng đặc tính lớp cha (ví dụ: Nhân viên kế thừa từ Con người).',
              'Polymorphism: Một hành động có nhiều cách thực hiện (ví dụ: Rút tiền ATM khác rút tiền tại quầy).',
              'Abstraction: Chỉ tập trung vào những gì đối tượng làm, không quan tâm nó làm thế nào.'
            ],
            bestPractices: [
              'Luôn sử dụng private cho các thuộc tính (fields) để bảo vệ dữ liệu.',
              'Sử dụng Constructor để đảm bảo đối tượng luôn ở trạng thái hợp lệ ngay khi vừa tạo ra.',
              'Hạn chế kế thừa quá sâu, ưu tiên sử dụng Interface để định nghĩa hành vi.'
            ],
            infographic: {
              type: 'hierarchy',
              data: {
                root: 'OOP Core',
                children: ['Class (Bản thiết kế)', 'Object (Thực thể)', 'Method (Hành động)', 'Field (Dữ liệu)']
              }
            }
          }
        }
      ]
    },
    {
      id: 'io-advanced',
      title: 'Input/Output & Advanced',
      icon: <Book className="w-5 h-5 text-amber-500" />,
      content: [
        {
          id: 'io',
          label: 'Nhập/Xuất (I/O)',
          desc: 'Tương tác với người dùng qua Console.',
          example: 'Scanner scanner = new Scanner(System.in);\nSystem.out.print("Nhập số tiền: ");\nBigDecimal amount = scanner.nextBigDecimal();',
          details: {
            overview: 'I/O là cách chương trình "nói chuyện" với người dùng. Tại NAB, chúng ta thường dùng các luồng (Streams) để đọc dữ liệu từ file giao dịch hoặc nhận input từ bàn phím.',
            points: [
              'System.out.println(): Xuất dữ liệu ra màn hình và xuống dòng.',
              'Scanner: Công cụ mạnh mẽ để đọc và phân tích dữ liệu từ bàn phím hoặc file.',
              'Formatting: Dùng System.out.printf() để định dạng số tiền hoặc ngày tháng đẹp mắt.',
              'Streams: Khái niệm luồng dữ liệu chảy từ nguồn đến đích.'
            ],
            bestPractices: [
              'Luôn thông báo cho người dùng biết họ cần nhập gì trước khi gọi hàm đọc dữ liệu.',
              'Sử dụng try-with-resources để tự động đóng các luồng I/O, tránh rò rỉ bộ nhớ.',
              'Kiểm tra dữ liệu đầu vào (Validation) trước khi xử lý để tránh lỗi chương trình.'
            ]
          }
        },
        {
          id: 'bigdecimal',
          label: 'BigDecimal Accuracy',
          desc: 'BẮT BUỘC dùng cho tiền tệ tại NAB.',
          example: 'BigDecimal amount = new BigDecimal("100.50");',
          details: {
            overview: 'BigDecimal cung cấp độ chính xác tuyệt đối cho các phép tính số thập phân, cực kỳ quan trọng trong tài chính. Khác với double, BigDecimal không bao giờ gặp lỗi làm tròn dấu phẩy động.',
            points: [
              'Immutability: BigDecimal là bất biến. Mọi phép toán đều trả về một đối tượng mới.',
              'Rounding: Luôn chỉ định RoundingMode (ví dụ: HALF_UP) khi thực hiện phép chia để tránh ArithmeticException.',
              'Constructor: Luôn dùng constructor String (new BigDecimal("0.1")) thay vì double (new BigDecimal(0.1)).'
            ],
            bestPractices: [
              'Sử dụng .compareTo() == 0 để so sánh giá trị thay vì .equals() (vì equals so sánh cả scale).',
              'Sử dụng setScale() để định dạng số chữ số thập phân theo yêu cầu nghiệp vụ.',
              'Sử dụng các hằng số có sẵn như BigDecimal.ZERO, BigDecimal.ONE.'
            ],
            warning: 'Dùng double cho tiền tệ có thể dẫn đến sai lệch hàng tỷ đồng trong các hệ thống ngân hàng lớn!'
          }
        }
      ]
    },
    {
      id: 'spring-cloud',
      title: 'Spring & System Design',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      content: [
        {
          id: 'spring-core',
          label: 'Spring Boot Core',
          desc: 'IoC, Dependency Injection và Bean Management.',
          example: '@Service\npublic class BankService {\n    private final AccountRepository repo;\n\n    public BankService(AccountRepository repo) {\n        this.repo = repo;\n    }\n}',
          details: {
            overview: 'Spring Boot là framework hàng đầu để xây dựng ứng dụng Java doanh nghiệp. Nó giúp lập trình viên tập trung vào logic nghiệp vụ thay vì cấu hình hạ tầng.',
            points: [
              'IoC (Inversion of Control): Spring quản lý vòng đời của đối tượng, bạn không cần dùng "new".',
              'DI (Dependency Injection): Spring tự động "tiêm" các phụ thuộc vào class khi cần.',
              'Beans: Các đối tượng được Spring Container quản lý và có thể tái sử dụng toàn cục.'
            ],
            bestPractices: [
              'Ưu tiên Constructor Injection thay vì Field Injection (@Autowired) để dễ viết Unit Test.',
              'Sử dụng các Annotation chuẩn (@Service cho logic, @Repository cho DB, @RestController cho API).',
              'Giữ cho các Bean là stateless (không lưu trạng thái) để đảm bảo an toàn đa luồng.'
            ]
          }
        },
        {
          id: 'system-design',
          label: 'System Design',
          desc: 'Microservices, Docker, Kafka và Redis.',
          example: 'services:\n  banking-app:\n    image: nab/banking:latest\n    ports: ["8080:8080"]',
          details: {
            overview: 'Thiết kế hệ thống quy mô lớn cho ngân hàng đòi hỏi tính sẵn sàng cao (High Availability) và khả năng mở rộng (Scalability).',
            points: [
              'Microservices: Chia nhỏ hệ thống thành các dịch vụ độc lập để dễ phát triển và triển khai.',
              'Docker: Đảm bảo ứng dụng chạy giống hệt nhau trên máy dev và trên server NAB.',
              'Kafka: Message Queue cho xử lý bất đồng bộ và tin cậy.',
              'Redis: Bộ nhớ đệm (Cache) giúp giảm tải cho Database và tăng tốc độ phản hồi.'
            ],
            bestPractices: [
              'Thiết kế database riêng biệt cho mỗi service (Database per Service).',
              'Sử dụng Circuit Breaker (như Resilience4j) để ngăn lỗi lan truyền giữa các service.',
              'Luôn có hệ thống Logging và Monitoring tập trung (như ELK Stack hoặc Prometheus).'
            ]
          }
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto w-full pb-20">
      <AnimatePresence mode="wait">
        {!selectedItem ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <header className="space-y-2 border-b border-slate-800 pb-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Info className="w-8 h-8 text-red-500" />
                Java Knowledge Base
              </h2>
              <p className="text-slate-400">Tài liệu hướng dẫn về cú pháp, quy tắc và tiêu chuẩn lập trình tại NAB.</p>
            </header>

            <div className="grid gap-8">
              {sections.map((section) => (
                <section key={section.id} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-200">{section.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.map((item) => (
                      <button 
                        key={item.id} 
                        onClick={() => setSelectedItem(item as DocItem)}
                        className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-red-500/50 hover:bg-slate-900 transition-all group text-left"
                      >
                        <h4 className="text-sm font-bold text-red-400 mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                            {item.label}
                          </span>
                          <ArrowLeft className="w-3 h-3 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                        </h4>
                        <p className="text-xs text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[10px] text-slate-500 overflow-x-auto">
                          <pre><code>{item.example.split('\n')[0]}...</code></pre>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <footer className="p-6 bg-red-600/5 border border-red-600/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-red-500" />
                <h4 className="font-bold text-white">Tài liệu tham khảo chính thức</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> Java Tutorials by Oracle
                </a>
                <a href="https://google.github.io/styleguide/javaguide.html" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> Google Java Style Guide
                </a>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Quay lại danh sách
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">{selectedItem.label}</h2>
                <p className="text-lg text-slate-400">{selectedItem.desc}</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8">
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider">
                    <Info className="w-4 h-4" />
                    Tổng quan
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedItem.details?.overview}
                  </p>
                </section>

                {selectedItem.details?.infographic && (
                  <section className="space-y-4 border-y border-slate-800/50">
                    <Infographic 
                      type={selectedItem.details.infographic.type} 
                      data={selectedItem.details.infographic.data} 
                    />
                  </section>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4" />
                      Các điểm chính
                    </div>
                    <ul className="space-y-3">
                      {selectedItem.details?.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      Best Practices
                    </div>
                    <ul className="space-y-3">
                      {selectedItem.details?.bestPractices.map((practice, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {selectedItem.details?.warning && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-200/80 italic">
                      {selectedItem.details.warning}
                    </p>
                  </div>
                )}

                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                    <Code2 className="w-4 h-4" />
                    Ví dụ mã nguồn
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto shadow-inner">
                    <pre><code>{selectedItem.example}</code></pre>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
