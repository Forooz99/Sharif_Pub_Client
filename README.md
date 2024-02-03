# کلاینت شریف‌پاب
- وب‌سایت شریف‌پاب محلی برای به اشتراک‌گذاری نشریه‌های دانشجویی است. ناشران با داشتن کد ناشر وارد حساب کاربری خود می‌شوند و در آنجا می‌توانند اطلاعات نشریه و برخی از اطلاعات کاربری را تغییر دهند، شماره‌ی جدید نشریه را روی سایت قرار دهند و یا شماره‌های قبلی را ویرایش یا حذف کنند. خوانندگان هم می‌توانند برای خود حساب کاربری جدید بسازند و نشریه‌ها و شماره‌های مورد علاقه خود را ذخیره کنند و با نام خود برای شماره‌ها نظر بدهند، همچنین می‌توانند اطلاعات خود را در پروفایل‌شان تغییر دهند. کاربران آزاد هم می‌توانند با عضو شدن در خبرنامه ما از آخرین شماره‌های منتشرشده مطلع شوند. در صفحه خانه هم نشریه‌های موجود نشان داده می‌شوند که با کلیک بر روی هر نشریه می‌توان لیستی از شماره‌های آن نشریه را دید.
- این مخزن کدهای سمت کلاینت شریف‌پاب را که با کتابخانه ‌react.js نوشته شده است را دارد.

## بخش کلاینت
- در این پروژه از دو کتابخانه‌ی React Bootstrap, React MDB جهت کاهش پیاده‌سازی‌های دستی استفاده شده است. کامپوننت‌ها در فولدر ‌components تعریف شده‌اند. کامپوننت‌های اصلی از این قراراند:
  - Navbar: از Navbar کتابخانه‌ی React Bootstrap استفاده شده است و کانتینر آن شامل نام برند و لینک‌ها به بخش‌های مختلف سایت است.
  - Footer: در این کامپوننت از کتابخانه‌ی ‌MDB استفاده شده است و در کانتینر آن در یک سطر سه تا ستون به ترتیب برای آیکون‌های شبکه‌های اجتماعی و تکست‌باکس ایمیل و دکمه عضو شدن تعریف شده است. در انتها هم یک بخش جدا برای کپی‌رایت سایت وجود دارد.
  - Profile: در این کامپوننت هم از کتابخانه MDB استفاده شده است. این کامپوننت محل نمایش اطلاعات شخصی مخاطب است که از طریق دیتابیس و backend گرفته شده و نمایش داده می شود. با استفاده از Redux گزینه logout در این کامپوننت پیاده سازی شده و هنگام انتخاب آن به صفحه ورود بر می گردیم.
  - Signup: در این کامپوننت نیز از کتابخانه‌ی React Bootstrap استفاده شده است و کانتینر آن شامل یک فرم برای گرفتن ورودی ایمیل و گذرواژه و تکرار آن است که با استفاده از useState مقادیر متغیر فرم ورودی را تعیین کرده و با فرستادن ورودی های آن با استفاده از axios و درخواست POST برای backend، پس از گرفتن تایید، مجوز ورود مخاطب به پنل پروفایل شخصی را به او می دهد. همچنین دو امکان ثبت نام از قبل و یا ورود به عنوان ناشر در این کامپوننت پیاده سازی شده. همچنین با استفاده از lazy load، سرعت رندر شدن صفحه بهبود داده شده است.
  - Login: در این کامپوننت نیز از کتابخانه‌ی React Bootstrap استفاده شده است و کانتینر آن شامل یک فرم برای گرفتن ورودی ایمیل و گذرواژه است. این کامپوننت هم به شکل ذکر شده ورودی های خود را برای backend فرستاده و با توجه به پاسخ آن کاربر را به پروفایل یا تلاش مجدد راهنمایی می کند. در این کامپوننت امکان ورود از طریق اکانت گوگل نیز فراهم شده است. همچنین مجددا برای بهبود سرعت از lazy load، استفاده شده است.
  - home:این کامپوننت شامل ولوم کانتینر است که به مخاطب نمایش داده شده و امکان مطالعه و دانلود آن را به مخاطب می دهد.
  - VolumeCards: در این کامپوننت از کتابخانه mui استفاده شده. این کامپوننت با دریافت ورودی هایی که شامل اطلاعات یک شماره از مجله هستند آنها را به شکل کارت‌ نمایش میدهد. با زدن دکمه دریافت فایل، فایل مجله دریافت میشود.
  - VolumesContainer: در کامپوننت کانیتنر نیز از  کتابخانه mui استفاده شده این کامپوننت برای نمایش ولوم کارت ها به صورت منظم تعریف شده

### `npm start run`

### `npm run build`


## بخش زیرساخت
