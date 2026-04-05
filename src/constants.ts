import { Level } from "./types";

export const ROADMAP: Level[] = [
  {
    id: 1,
    name: "Level 1",
    title: "The Artisan (Thợ thủ công - Core Java)",
    goal: "Nắm vững Java Syntax và Logic cơ bản.",
    modules: [
      {
        id: "l1-m1",
        title: "Module 1: Biến, Kiểu dữ liệu & Control Flow",
        description: "Học về BigDecimal cho tiền tệ và các cấu trúc điều khiển.",
        content: `### 1. Tại sao dùng BigDecimal?
Trong lập trình tài chính tại NAB, độ chính xác là tuyệt đối. Các kiểu dữ liệu \`float\` hoặc \`double\` sử dụng dấu phẩy động (floating-point) dẫn đến sai số làm tròn (rounding errors).
- **Vấn đề:** \`0.1 + 0.2\` có thể ra \`0.30000000000000004\`.
- **Giải pháp:** \`BigDecimal\` xử lý số thập phân với độ chính xác tùy chỉnh.

### 2. Các thành phần chính của BigDecimal
- **Scale:** Số chữ số sau dấu phẩy.
- **Precision:** Tổng số chữ số.
- **RoundingMode:** Cách xử lý khi làm tròn (ví dụ: \`HALF_UP\` là làm tròn lên nếu >= 5).

### 3. Cấu trúc điều khiển (Control Flow)
Sử dụng \`if-else\` và \`switch-case\` để phân luồng giao dịch. 
*Lưu ý:* Luôn kiểm tra \`null\` trước khi so sánh để tránh \`NullPointerException\`.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 1] Two Sum: Cho một mảng số nguyên và một số mục tiêu, tìm chỉ số của hai số sao cho tổng của chúng bằng mục tiêu.",
            example: "Input: nums = [2,7,11,15], target = 9 -> Output: [0,1]"
          },
          {
            level: 'medium',
            description: "[LeetCode 15] 3Sum: Tìm tất cả các bộ ba số trong mảng có tổng bằng 0.",
            example: "Input: nums = [-1,0,1,2,-1,-4] -> Output: [[-1,-1,2],[-1,0,1]]"
          },
          {
            level: 'hard',
            description: "[LeetCode 4] Median of Two Sorted Arrays: Tìm trung vị của hai mảng đã sắp xếp.",
            example: "Input: nums1 = [1,3], nums2 = [2] -> Output: 2.0"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Khởi tạo các biến cơ bản cho hệ thống Bank: bankName, branchCode, interestRate.",
            example: "String bankName = \"NAB Digital\"; double interestRate = 0.05;"
          },
          {
            level: 'medium',
            description: "Xây dựng logic tính lãi suất tiết kiệm sử dụng BigDecimal với RoundingMode.HALF_UP.",
            example: "BigDecimal balance = new BigDecimal(\"1000.50\");"
          },
          {
            level: 'hard',
            description: "Thiết kế hệ thống quản lý cấu hình ngân hàng đa chi nhánh, hỗ trợ thay đổi lãi suất theo vùng.",
            example: "Map<String, BigDecimal> regionalRates = new HashMap<>();"
          }
        ],
        projectExplanation: "Bài tập này giúp bạn làm quen với việc khai báo các thông số cấu hình cơ bản của một hệ thống ngân hàng. Đây là những giá trị ít thay đổi nhưng cực kỳ quan trọng.",
        projectVariableTypes: "- bankName: String (Tên ngân hàng)\n- branchCode: String (Mã chi nhánh)\n- interestRate: double hoặc BigDecimal (Lãi suất hàng năm)",
        projectRules: "- Tên biến phải rõ nghĩa, sử dụng camelCase.\n- Hằng số (nếu có) nên dùng UPPER_SNAKE_CASE.\n- Luôn kết thúc câu lệnh bằng dấu chấm phẩy (;).",
        projectDocs: [
          "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html",
          "https://www.baeldung.com/java-bigdecimal-precision"
        ],
        isLocked: false,
        isCompleted: false,
      },
      {
        id: "l1-m2",
        title: "Module 2: OOP (Encapsulation, Inheritance, Polymorphism)",
        description: "Xây dựng nền tảng hướng đối tượng.",
        content: `### 1. Encapsulation (Tính đóng gói)
Bảo vệ dữ liệu nhạy cảm như số dư tài khoản (\`balance\`).
- **Private fields:** Không cho phép truy cập trực tiếp từ bên ngoài.
- **Public Methods:** Cung cấp \`getter\` và \`setter\` có kiểm tra logic (ví dụ: không cho phép set số dư âm).

### 2. Inheritance (Tính kế thừa)
Tái sử dụng mã nguồn. Ví dụ: Class \`SavingsAccount\` và \`CurrentAccount\` đều kế thừa từ class chung là \`Account\`.

### 3. Polymorphism (Tính đa hình)
Cho phép một đối tượng thực hiện các hành động khác nhau. 
- **Overriding:** Ghi đè phương thức \`calculateInterest()\` tùy theo loại tài khoản.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 20] Valid Parentheses: Kiểm tra xem một chuỗi chứa các ký tự '(', ')', '{', '}', '[' và ']' có hợp lệ hay không.",
            example: "Input: s = \"()[]{}\" -> Output: true"
          },
          {
            level: 'medium',
            description: "[LeetCode 22] Generate Parentheses: Tạo tất cả các tổ hợp ngoặc hợp lệ từ n cặp ngoặc.",
            example: "Input: n = 3 -> Output: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
          },
          {
            level: 'hard',
            description: "[LeetCode 32] Longest Valid Parentheses: Tìm độ dài của chuỗi ngoặc hợp lệ dài nhất.",
            example: "Input: s = \")()())\" -> Output: 4"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Tạo Class Account và Customer, quản lý bằng mảng đơn giản.",
            example: "Customer[] customers = new Customer[10];"
          },
          {
            level: 'medium',
            description: "Triển khai tính kế thừa cho SavingsAccount và CurrentAccount với logic rút tiền khác nhau.",
            example: "class SavingsAccount extends Account { ... }"
          },
          {
            level: 'hard',
            description: "Xây dựng hệ thống quản lý tài khoản đa cấp với Interface và Abstract Class, hỗ trợ nhiều loại tiền tệ.",
            example: "abstract class BaseAccount implements IAccount { ... }"
          }
        ],
        projectExplanation: "Xây dựng cấu trúc dữ liệu thực tế cho ngân hàng bằng cách sử dụng các lớp (Classes). Điều này giúp quản lý thông tin khách hàng và tài khoản một cách có hệ thống.",
        projectVariableTypes: "- Account: Class (Chứa balance, accountNumber)\n- Customer: Class (Chứa name, customerId, list of accounts)",
        projectRules: "- Sử dụng private access modifier cho các thuộc tính.\n- Cung cấp getter/setter công khai.\n- Đặt tên Class theo PascalCase.",
        projectDocs: [
          "https://docs.oracle.com/javase/tutorial/java/concepts/index.html",
          "https://www.geeksforgeeks.org/object-oriented-programming-in-java/"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  },
  {
    id: 2,
    name: "Level 2",
    title: "The Architect (Kiến trúc sư - Data Structures)",
    goal: "Xử lý dữ liệu hiệu quả và sạch sẽ.",
    modules: [
      {
        id: "l2-m1",
        title: "Module 3: Java Collections (List, Set, Map)",
        description: "Sử dụng Collections để quản lý danh sách giao dịch.",
        content: `### 1. List (ArrayList vs LinkedList)
- **ArrayList:** Truy xuất nhanh (O(1)), phù hợp để hiển thị lịch sử giao dịch.
- **LinkedList:** Thêm/Xóa nhanh, phù hợp cho hàng đợi xử lý.

### 2. Map (HashMap)
Cực kỳ quan trọng để tra cứu dữ liệu.
- **Key:** Định danh duy nhất (ví dụ: \`accountNumber\`).
- **Value:** Đối tượng tương ứng (\`Account\` object).
- **Độ phức tạp:** O(1) cho việc tìm kiếm.

### 3. Set (HashSet)
Đảm bảo tính duy nhất. Dùng để lưu danh sách các mã chi nhánh không trùng lặp.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 217] Contains Duplicate: Cho một mảng số nguyên, trả về true nếu bất kỳ giá trị nào xuất hiện ít nhất hai lần.",
            example: "Input: nums = [1,2,3,1] -> Output: true"
          },
          {
            level: 'medium',
            description: "[LeetCode 128] Longest Consecutive Sequence: Tìm độ dài của dãy con liên tiếp dài nhất.",
            example: "Input: nums = [100,4,200,1,3,2] -> Output: 4"
          },
          {
            level: 'hard',
            description: "[LeetCode 41] First Missing Positive: Tìm số nguyên dương nhỏ nhất còn thiếu trong mảng.",
            example: "Input: nums = [1,2,0] -> Output: 3"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Thay thế mảng bằng ArrayList để quản lý danh sách tài khoản.",
            example: "List<Account> accounts = new ArrayList<>();"
          },
          {
            level: 'medium',
            description: "Sử dụng HashMap để quản lý khách hàng theo ID và tối ưu hóa việc tìm kiếm.",
            example: "Map<String, Customer> customerMap = new HashMap<>();"
          },
          {
            level: 'hard',
            description: "Triển khai hệ thống Cache đơn giản bằng LinkedHashMap để lưu trữ các giao dịch gần đây nhất.",
            example: "LinkedHashMap<String, Transaction> recentTx = new LinkedHashMap<>(...);"
          }
        ],
        projectExplanation: "Mảng cố định kích thước không linh hoạt cho ngân hàng. ArrayList cho phép danh sách khách hàng phát triển vô hạn khi ngân hàng có thêm người dùng mới.",
        projectVariableTypes: "- List<Account>: Interface List với kiểu generic Account\n- Map<String, Customer>: Dùng để tra cứu khách hàng nhanh qua ID",
        projectRules: "- Luôn khai báo bằng Interface (List) và khởi tạo bằng Implementation (ArrayList).\n- Sử dụng Generics để đảm bảo an toàn kiểu dữ liệu.",
        projectDocs: [
          "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html",
          "https://www.baeldung.com/java-collections"
        ],
        isLocked: true,
        isCompleted: false,
      },
      {
        id: "l2-m2",
        title: "Module 4: Exception Handling & Java IO",
        description: "Xử lý lỗi và lưu trữ dữ liệu vào file.",
        content: `### 1. Exception Handling
Trong ngân hàng, lỗi không được làm sập hệ thống.
- **Checked Exception:** Lỗi bắt buộc phải xử lý (ví dụ: \`IOException\`).
- **Unchecked Exception:** Lỗi logic (ví dụ: \`ArithmeticException\`).
- **Custom Exception:** Tạo \`InsufficientBalanceException\` để thông báo khi khách hàng không đủ tiền.

### 2. Java IO (NIO.2)
Sử dụng \`Files\` và \`Paths\` để ghi log giao dịch vào file \`.log\` hoặc \`.csv\`.
- **Try-with-resources:** Tự động đóng file stream để tránh rò rỉ bộ nhớ.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 206] Reverse Linked List: Đảo ngược một danh sách liên kết đơn.",
            example: "Input: 1->2->3 -> Output: 3->2->1"
          },
          {
            level: 'medium',
            description: "[LeetCode 92] Reverse Linked List II: Đảo ngược danh sách liên kết từ vị trí m đến n.",
            example: "Input: 1->2->3->4->5, m=2, n=4 -> Output: 1->4->3->2->5"
          },
          {
            level: 'hard',
            description: "[LeetCode 25] Reverse Nodes in k-Group: Đảo ngược các nút của danh sách liên kết theo từng nhóm k.",
            example: "Input: 1->2->3->4->5, k=2 -> Output: 2->1->4->3->5"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Xây dựng hệ thống tìm kiếm khách hàng bằng Nickname/Phone và lưu lịch sử vào file.",
            example: "searchCustomer(\"0901234567\");"
          },
          {
            level: 'medium',
            description: "Triển khai Custom Exception 'InsufficientBalanceException' và xử lý lỗi khi chuyển khoản.",
            example: "throw new InsufficientBalanceException(\"...\");"
          },
          {
            level: 'hard',
            description: "Xây dựng hệ thống Logging đa luồng, ghi log giao dịch vào nhiều file khác nhau theo mức độ nghiêm trọng.",
            example: "Logger.log(Level.ERROR, \"...\");"
          }
        ],
        projectExplanation: "Hệ thống cần lưu lại vết (audit trail) của các giao dịch. Việc ghi file giúp dữ liệu tồn tại ngay cả khi ứng dụng tắt.",
        projectVariableTypes: "- Path: Đường dẫn file\n- BufferedReader/BufferedWriter: Luồng đọc ghi dữ liệu\n- CustomException: Lớp ngoại lệ tự định nghĩa",
        projectRules: "- Luôn sử dụng try-with-resources để quản lý tài nguyên file.\n- Không bao giờ để trống khối catch (swallowing exceptions).",
        projectDocs: [
          "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
          "https://docs.oracle.com/javase/tutorial/essential/io/fileio.html"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  },
  {
    id: 3,
    name: "Level 3",
    title: "The Engineer (Kỹ sư - Web Backend)",
    goal: "Đưa ứng dụng lên Cloud và Web.",
    modules: [
      {
        id: "l3-m1",
        title: "Module 5: Spring Boot Core (IOC, DI, Bean)",
        description: "Hiểu về cách Spring quản lý các đối tượng.",
        content: `### 1. Inversion of Control (IoC)
Thay vì bạn tự tạo đối tượng bằng từ khóa \`new\`, Spring Container sẽ quản lý vòng đời của chúng.

### 2. Dependency Injection (DI)
Cung cấp các phụ thuộc (dependencies) cho một class thông qua \`Constructor\` hoặc \`Setter\`.
- **Lợi ích:** Code lỏng lẻo (loose coupling), dễ dàng Mock khi viết Unit Test.

### 3. Spring Beans
Các đối tượng được Spring quản lý. 
- **Scopes:** \`Singleton\` (mặc định), \`Prototype\`, \`Request\`, \`Session\`.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 70] Climbing Stairs: Bạn đang leo cầu thang. Cần n bước để lên đến đỉnh. Mỗi lần bạn có thể leo 1 hoặc 2 bước. Có bao nhiêu cách khác nhau để leo lên đỉnh?",
            example: "Input: n = 3 -> Output: 3 (1+1+1, 1+2, 2+1)"
          },
          {
            level: 'medium',
            description: "[LeetCode 322] Coin Change: Tìm số lượng xu ít nhất để tạo thành một số tiền cho trước.",
            example: "Input: coins = [1,2,5], amount = 11 -> Output: 3"
          },
          {
            level: 'hard',
            description: "[LeetCode 72] Edit Distance: Tìm số lượng thao tác ít nhất để chuyển chuỗi này thành chuỗi kia.",
            example: "Input: word1 = \"horse\", word2 = \"ros\" -> Output: 3"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Khởi tạo dự án Spring Boot và cấu hình các Bean cơ bản cho Banking Service.",
            example: "@Bean public BankingService bankingService() { ... }"
          },
          {
            level: 'medium',
            description: "Sử dụng @Value và @ConfigurationProperties để quản lý cấu hình ngân hàng từ file application.yml.",
            example: "@ConfigurationProperties(prefix = \"bank\")"
          },
          {
            level: 'hard',
            description: "Triển khai Custom Bean PostProcessor để tự động log thời gian thực thi của các phương thức trong BankingService.",
            example: "implements BeanPostProcessor { ... }"
          }
        ],
        projectExplanation: "Chuyển đổi ứng dụng Java thuần sang Spring Boot để tận dụng hệ sinh thái mạnh mẽ cho doanh nghiệp.",
        projectVariableTypes: "- ApplicationContext: Container chứa các beans\n- @Component/@Service: Đánh dấu các lớp được Spring quản lý",
        projectRules: "- Ưu tiên Constructor Injection thay vì Field Injection (@Autowired).\n- Giữ cho các Bean là stateless nếu có thể.",
        projectDocs: [
          "https://spring.io/projects/spring-boot",
          "https://www.baeldung.com/spring-boot-start"
        ],
        isLocked: true,
        isCompleted: false,
      },
      {
        id: "l3-m2",
        title: "Module 6: RESTful API & JPA/Hibernate",
        description: "Kết nối cơ sở dữ liệu và cung cấp API.",
        content: `### 1. RESTful API Concepts
Sử dụng các HTTP Methods chuẩn:
- **GET:** Lấy thông tin tài khoản.
- **POST:** Tạo giao dịch mới.
- **PUT/PATCH:** Cập nhật thông tin khách hàng.
- **DELETE:** Đóng tài khoản.

### 2. Spring Data JPA
Giúp tương tác với Database mà không cần viết SQL thuần.
- **Entity:** Map class Java với table trong DB.
- **Repository:** Cung cấp các hàm CRUD (\`save\`, \`findById\`, \`delete\`).`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 141] Linked List Cycle: Xác định xem một danh sách liên kết có chu kỳ hay không.",
            example: "Input: head = [3,2,0,-4], pos = 1 -> Output: true"
          },
          {
            level: 'medium',
            description: "[LeetCode 142] Linked List Cycle II: Tìm nút bắt đầu của chu kỳ trong danh sách liên kết.",
            example: "Input: head = [3,2,0,-4], pos = 1 -> Output: tail connects to node index 1"
          },
          {
            level: 'hard',
            description: "[LeetCode 23] Merge k Sorted Lists: Hợp nhất k danh sách liên kết đã sắp xếp.",
            example: "Input: [[1,4,5],[1,3,4],[2,6]] -> Output: [1,1,2,3,4,4,5,6]"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Viết API Đăng nhập, Chuyển khoản, Truy vấn số dư.",
            example: "@PostMapping(\"/transfer\") public Response transfer(...) { ... }"
          },
          {
            level: 'medium',
            description: "Triển khai JPA Specification để tìm kiếm giao dịch theo nhiều tiêu chí (ngày, số tiền, loại giao dịch).",
            example: "Specification<Transaction> spec = ...;"
          },
          {
            level: 'hard',
            description: "Tối ưu hóa hiệu năng truy vấn bằng cách sử dụng @EntityGraph và xử lý bài toán N+1 trong Hibernate.",
            example: "@EntityGraph(attributePaths = {\"accounts\"})"
          }
        ],
        projectExplanation: "Xây dựng các điểm cuối (endpoints) để ứng dụng di động hoặc web có thể tương tác với hệ thống ngân hàng.",
        projectVariableTypes: "- @RestController: Đánh dấu lớp xử lý API\n- @Entity: Lớp đại diện cho bảng dữ liệu\n- JpaRepository: Interface xử lý DB",
        projectRules: "- Sử dụng đúng HTTP Status Codes (200 OK, 404 Not Found, 400 Bad Request).\n- Luôn validate dữ liệu đầu vào bằng @Valid.",
        projectDocs: [
          "https://restfulapi.net/",
          "https://spring.io/projects/spring-data-jpa"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  },
  {
    id: 4,
    name: "Level 4",
    title: "The Guardian (Security & Performance)",
    goal: "Bảo mật chuẩn ngân hàng và tối ưu hóa.",
    modules: [
      {
        id: "l4-m1",
        title: "Module 7: Spring Security & JWT",
        description: "Bảo mật ứng dụng bằng Token.",
        content: `### 1. Authentication vs Authorization
- **Authentication:** Bạn là ai? (Đăng nhập).
- **Authorization:** Bạn có quyền làm gì? (Admin vs User).

### 2. JSON Web Token (JWT)
Cấu trúc gồm 3 phần: \`Header.Payload.Signature\`.
- **Stateless:** Server không cần lưu session, giúp hệ thống dễ mở rộng (scale).

### 3. Filter Chain
Spring Security sử dụng một chuỗi các Filter để kiểm tra token trước khi yêu cầu đến được Controller.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 242] Valid Anagram: Cho hai chuỗi s và t, trả về true nếu t là một anagram của s.",
            example: "Input: s = \"anagram\", t = \"nagaram\" -> Output: true"
          },
          {
            level: 'medium',
            description: "[LeetCode 49] Group Anagrams: Nhóm các chuỗi là anagram của nhau.",
            example: "Input: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] -> Output: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
          },
          {
            level: 'hard',
            description: "[LeetCode 438] Find All Anagrams in a String: Tìm tất cả các chỉ số bắt đầu của anagram của p trong s.",
            example: "Input: s = \"cbaebabacd\", p = \"abc\" -> Output: [0,6]"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Phân quyền Admin/User cho các API ngân hàng.",
            example: "@PreAuthorize(\"hasRole('ADMIN')\")"
          },
          {
            level: 'medium',
            description: "Triển khai Refresh Token logic để duy trì phiên đăng nhập an toàn.",
            example: "POST /auth/refresh"
          },
          {
            level: 'hard',
            description: "Tích hợp OAuth2 với Google/GitHub để cho phép đăng nhập bằng tài khoản mạng xã hội.",
            example: "spring.security.oauth2.client.registration.google"
          }
        ],
        projectExplanation: "Bảo vệ tiền của khách hàng bằng cách ngăn chặn truy cập trái phép. Chỉ người dùng hợp lệ mới có thể thực hiện giao dịch.",
        projectVariableTypes: "- SecurityContextHolder: Lưu thông tin người dùng hiện tại\n- JwtTokenProvider: Lớp xử lý tạo/giải mã token",
        projectRules: "- Không bao giờ lưu mật khẩu dưới dạng văn bản thuần (luôn dùng BCrypt).\n- Sử dụng HTTPS để bảo vệ token trên đường truyền.",
        projectDocs: [
          "https://spring.io/projects/spring-security",
          "https://jwt.io/introduction"
        ],
        isLocked: true,
        isCompleted: false,
      },
      {
        id: "l4-m2",
        title: "Module 8: Unit Test (JUnit 5, Mockito)",
        description: "Đảm bảo chất lượng code bằng kiểm thử tự động.",
        content: `### 1. Tại sao phải Test?
Tại NAB, một lỗi nhỏ trong code chuyển tiền có thể gây thiệt hại hàng triệu đô. Unit Test giúp phát hiện lỗi ngay khi vừa viết code.

### 2. JUnit 5
Framework chuẩn để viết test.
- **Annotations:** \`@Test\`, \`@BeforeEach\`, \`@AfterEach\`.

### 3. Mockito
Dùng để giả lập (mock) các thành phần bên ngoài.
- **Mock:** Giả lập Database hoặc API bên thứ ba để tập trung test logic của class hiện tại.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 121] Best Time to Buy and Sell Stock: Tìm lợi nhuận tối đa bạn có thể đạt được từ việc mua và bán một cổ phiếu.",
            example: "Input: [7,1,5,3,6,4] -> Output: 5 (Mua giá 1, bán giá 6)"
          },
          {
            level: 'medium',
            description: "[LeetCode 122] Best Time to Buy and Sell Stock II: Tìm lợi nhuận tối đa nếu bạn có thể mua bán nhiều lần.",
            example: "Input: [7,1,5,3,6,4] -> Output: 7"
          },
          {
            level: 'hard',
            description: "[LeetCode 123] Best Time to Buy and Sell Stock III: Tìm lợi nhuận tối đa nếu bạn chỉ có thể thực hiện tối đa hai giao dịch.",
            example: "Input: [3,3,5,0,0,3,1,4] -> Output: 6"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Triển khai Multi-factor Authentication (MFA) cho giao dịch.",
            example: "Verify OTP code after password check."
          },
          {
            level: 'medium',
            description: "Viết Integration Tests cho luồng chuyển tiền sử dụng Testcontainers để giả lập Database.",
            example: "@Testcontainers class BankingIntegrationTest { ... }"
          },
          {
            level: 'hard',
            description: "Triển khai Mutation Testing bằng PITest để đánh giá chất lượng của bộ Unit Test hiện tại.",
            example: "mvn org.pitest:pitest-maven:mutationCoverage"
          }
        ],
        projectExplanation: "Viết mã kiểm thử để đảm bảo rằng các tính năng quan trọng như chuyển khoản luôn hoạt động đúng 100% trong mọi trường hợp.",
        projectVariableTypes: "- @Mock: Giả lập đối tượng\n- @InjectMocks: Tiêm các mock vào class cần test\n- Assertions: Các câu lệnh kiểm tra kết quả (assertEquals, assertTrue)",
        projectRules: "- Mỗi Unit Test chỉ nên kiểm tra một đơn vị logic nhỏ nhất.\n- Test phải độc lập, không phụ thuộc vào thứ tự chạy.",
        projectDocs: [
          "https://junit.org/junit5/",
          "https://site.mockito.org/"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  },
  {
    id: 5,
    name: "Level 5",
    title: "The Master (Bậc thầy - System Design & Cloud)",
    goal: "Hệ thống lớn, chịu tải cao.",
    modules: [
      {
        id: "l5-m1",
        title: "Module 9: Microservices, Docker, Redis Cache",
        description: "Kiến trúc phân tán và tối ưu hóa hiệu năng.",
        content: `### 1. Microservices Architecture
Chia nhỏ ứng dụng thành các dịch vụ độc lập (Auth Service, Transaction Service, Notification Service).

### 2. Docker
Đóng gói ứng dụng và môi trường chạy vào một \`Container\`. Giúp ứng dụng chạy giống hệt nhau trên máy dev và trên Cloud.

### 3. Redis Cache
Lưu trữ dữ liệu tạm thời trên RAM.
- **Ứng dụng:** Lưu tỷ giá hối đoái hoặc thông tin phiên đăng nhập để giảm tải cho Database chính.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 238] Product of Array Except Self: Cho một mảng nums, trả về một mảng sao cho mỗi phần tử tại i là tích của tất cả các phần tử trừ nums[i].",
            example: "Input: [1,2,3,4] -> Output: [24,12,8,6]"
          },
          {
            level: 'medium',
            description: "[LeetCode 152] Maximum Product Subarray: Tìm dãy con liên tiếp có tích lớn nhất.",
            example: "Input: [2,3,-2,4] -> Output: 6"
          },
          {
            level: 'hard',
            description: "[LeetCode 239] Sliding Window Maximum: Tìm giá trị lớn nhất trong mỗi cửa sổ trượt kích thước k.",
            example: "Input: nums = [1,3,-1,-3,5,3,6,7], k = 3 -> Output: [3,3,5,5,6,7]"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Dockerize các dịch vụ của Digital Banking.",
            example: "Dockerfile: FROM openjdk:17-jdk-slim ..."
          },
          {
            level: 'medium',
            description: "Triển khai Redis Caching cho API tỷ giá hối đoái để giảm thời gian phản hồi.",
            example: "@Cacheable(value = \"rates\")"
          },
          {
            level: 'hard',
            description: "Xây dựng hệ thống Circuit Breaker sử dụng Resilience4j để bảo vệ hệ thống khi các dịch vụ bên ngoài gặp sự cố.",
            example: "@CircuitBreaker(name = \"backendA\")"
          }
        ],
        projectExplanation: "Chuẩn bị ứng dụng để chạy trên môi trường Cloud hiện đại, giúp hệ thống có thể mở rộng nhanh chóng khi lượng người dùng tăng đột biến.",
        projectVariableTypes: "- Dockerfile: File cấu hình container\n- RedisTemplate: Công cụ tương tác với Redis\n- RestTemplate/WebClient: Gọi API giữa các microservices",
        projectRules: "- Một container chỉ nên chạy một tiến trình duy nhất.\n- Sử dụng Cache hợp lý, tránh làm dữ liệu bị cũ (stale data).",
        projectDocs: [
          "https://www.docker.com/resources/what-container",
          "https://redis.io/docs/getting-started/"
        ],
        isLocked: true,
        isCompleted: false,
      },
      {
        id: "l5-m2",
        title: "Module 10: Message Queue (Kafka)",
        description: "Xử lý bất đồng bộ và luồng dữ liệu lớn.",
        content: `### 1. Message Queue là gì?
Cơ chế truyền tin bất đồng bộ. Dịch vụ A gửi tin nhắn vào Queue, dịch vụ B lấy ra xử lý khi rảnh.

### 2. Apache Kafka
Hệ thống streaming dữ liệu cực mạnh.
- **Producer:** Gửi sự kiện giao dịch.
- **Topic:** Nơi lưu trữ tin nhắn.
- **Consumer:** Nhận và xử lý (ví dụ: gửi email thông báo biến động số dư).

### 3. Event-Driven Design
Hệ thống phản ứng với các sự kiện thay vì gọi trực tiếp lẫn nhau, giúp tăng tính linh hoạt và khả năng chịu lỗi.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 15] 3Sum: Tìm tất cả các bộ ba số trong mảng có tổng bằng 0.",
            example: "Input: [-1,0,1,2,-1,-4] -> Output: [[-1,-1,2],[-1,0,1]]"
          },
          {
            level: 'medium',
            description: "[LeetCode 16] 3Sum Closest: Tìm bộ ba số có tổng gần nhất với một số mục tiêu cho trước.",
            example: "Input: nums = [-1,2,1,-4], target = 1 -> Output: 2"
          },
          {
            level: 'hard',
            description: "[LeetCode 18] 4Sum: Tìm tất cả các bộ bốn số có tổng bằng mục tiêu.",
            example: "Input: nums = [1,0,-1,0,-2,2], target = 0 -> Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Hoàn thiện 'NAB Omni-Channel Platform', Deploy lên AWS/Azure.",
            example: "CI/CD pipeline to AWS EKS."
          },
          {
            level: 'medium',
            description: "Triển khai Kafka Producer/Consumer để xử lý thông báo biến động số dư bất đồng bộ.",
            example: "kafkaTemplate.send(\"balance-updates\", ...)"
          },
          {
            level: 'hard',
            description: "Xây dựng hệ thống Event Sourcing cho các giao dịch tài chính, cho phép phục hồi trạng thái tài khoản tại bất kỳ thời điểm nào.",
            example: "Store events instead of current state."
          }
        ],
        projectExplanation: "Sử dụng Kafka để xử lý hàng triệu giao dịch mỗi giây mà không làm nghẽn hệ thống. Đây là đỉnh cao của kỹ thuật backend tại các ngân hàng lớn.",
        projectVariableTypes: "- KafkaTemplate: Gửi tin nhắn\n- @KafkaListener: Nhận tin nhắn\n- Topic: Kênh truyền tin",
        projectRules: "- Đảm bảo tính Idempotency (xử lý tin nhắn trùng lặp).\n- Giám sát (monitor) độ trễ của Consumer (lag).",
        projectDocs: [
          "https://kafka.apache.org/documentation/",
          "https://www.confluent.io/what-is-apache-kafka/"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  },
  {
    id: 6,
    name: "Level 6",
    title: "The Data Specialist (Chuyên gia dữ liệu - Database Design)",
    goal: "Thiết kế và tối ưu hóa cơ sở dữ liệu.",
    modules: [
      {
        id: "l6-m1",
        title: "Module 11: Database Design & Connectivity",
        description: "Học về thiết kế DB chuẩn và cách kết nối ứng dụng.",
        content: `### 1. Database Design (ERD & Normalization)
Thiết kế cơ sở dữ liệu quan hệ (RDBMS) hiệu quả.
- **ERD (Entity Relationship Diagram):** Sơ đồ thực thể mối quan hệ.
- **Normalization:** Chống dư thừa dữ liệu (1NF, 2NF, 3NF).

### 2. SQL & Connectivity
- **SQL:** Ngôn ngữ truy vấn có cấu trúc (SELECT, JOIN, GROUP BY).
- **JDBC/JPA:** Cách ứng dụng Java kết nối và thao tác với Database.
- **Connection Pooling:** Tối ưu hóa việc quản lý các kết nối đến DB.`,
        dsaTasks: [
          {
            level: 'easy',
            description: "[LeetCode 175] Combine Two Tables: Viết một câu lệnh SQL để báo cáo thông tin cho mỗi người trong bảng Person.",
            example: "SELECT FirstName, LastName, City, State FROM Person LEFT JOIN Address ON Person.PersonId = Address.PersonId"
          },
          {
            level: 'medium',
            description: "[LeetCode 176] Second Highest Salary: Tìm mức lương cao thứ hai trong bảng Employee.",
            example: "SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee)"
          },
          {
            level: 'hard',
            description: "[LeetCode 185] Department Top Three Salaries: Tìm ba nhân viên có mức lương cao nhất trong mỗi phòng ban.",
            example: "SELECT d.Name, e.Name, e.Salary FROM ..."
          }
        ],
        projectTasks: [
          {
            level: 'easy',
            description: "Thiết kế lược đồ Database cho hệ thống Core Banking và viết các câu truy vấn phức tạp.",
            example: "CREATE TABLE Accounts (id INT PRIMARY KEY, balance DECIMAL(19,4), ...);"
          },
          {
            level: 'medium',
            description: "Triển khai Database Sharding hoặc Partitioning để xử lý hàng tỷ bản ghi giao dịch.",
            example: "PARTITION BY RANGE (year(transaction_date))"
          },
          {
            level: 'hard',
            description: "Tối ưu hóa Database bằng cách sử dụng Materialized Views và Indexing nâng cao (B-Tree, Hash Index).",
            example: "CREATE MATERIALIZED VIEW daily_summary AS ..."
          }
        ],
        projectExplanation: "Dữ liệu là tài sản quý giá nhất của ngân hàng. Thiết kế DB tốt giúp hệ thống chạy nhanh, an toàn và dễ mở rộng.",
        projectVariableTypes: "- SQL Schema: Cấu trúc bảng\n- ERD Diagram: Sơ đồ mối quan hệ\n- JPA Entity: Lớp Java đại diện cho bảng",
        projectRules: "- Luôn sử dụng khóa ngoại (Foreign Key) để đảm bảo tính toàn vẹn dữ liệu.\n- Đánh index cho các cột thường xuyên được tìm kiếm.",
        projectDocs: [
          "https://www.w3schools.com/sql/",
          "https://docs.oracle.com/javase/tutorial/jdbc/"
        ],
        isLocked: true,
        isCompleted: false,
      }
    ]
  }
];
