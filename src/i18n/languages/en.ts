import Key from "../i18nKey";
import type { Translation } from "../translation";

export const en: Translation = {
	[Key.home]: "Trang chủ",
	[Key.about]: "Giới thiệu",
	[Key.archive]: "Lưu trữ",
	[Key.search]: "Tìm kiếm",
	[Key.other]: "Khác",

	// Navigation bar titles
	[Key.navLinks]: "Liên kết",
	[Key.navMy]: "Của tôi",
	[Key.navAbout]: "Giới thiệu",
	[Key.navOthers]: "Khác",

	[Key.tags]: "Thẻ",
	[Key.categories]: "Danh mục",
	[Key.recentPosts]: "Bài viết mới",
	[Key.postList]: "Danh sách bài viết",
	[Key.tableOfContents]: "Mục lục",
	[Key.tocEmpty]: "Không có mục lục",

	// Announcement
	[Key.announcement]: "Thông báo",
	[Key.announcementClose]: "Đóng",

	[Key.comments]: "Bình luận",
	[Key.friends]: "Bạn bè",
	[Key.friendsSubtitle]: "Khám phá thêm nhiều website hay",
	[Key.friendsSearchPlaceholder]: "Tìm theo tên hoặc mô tả...",
	[Key.friendsFilterAll]: "Tất cả",
	[Key.friendsNoResults]: "Không tìm thấy kết quả phù hợp",
	[Key.friendsVisit]: "Truy cập",
	[Key.friendsCopyLink]: "Sao chép liên kết",
	[Key.friendsCopySuccess]: "Đã sao chép",
	[Key.friendsTags]: "Thẻ",
	[Key.untitled]: "Chưa có tiêu đề",
	[Key.uncategorized]: "Chưa phân loại",
	[Key.noTags]: "Không có thẻ",

	[Key.wordCount]: "từ",
	[Key.wordsCount]: "từ",
	[Key.minuteCount]: "phút",
	[Key.minutesCount]: "phút",
	[Key.postCount]: "bài viết",
	[Key.postsCount]: "bài viết",

	[Key.themeColor]: "Màu giao diện",

	[Key.lightMode]: "Sáng",
	[Key.darkMode]: "Tối",
	[Key.systemMode]: "Theo hệ thống",

	[Key.more]: "Xem thêm",

	[Key.author]: "Tác giả",
	[Key.publishedAt]: "Ngày đăng",
	[Key.license]: "Giấy phép",
	[Key.anime]: "Anime",
	[Key.diary]: "Nhật ký",

	// Anime Page
	[Key.animeTitle]: "Danh sách Anime của tôi",
	[Key.animeSubtitle]: "Ghi lại hành trình xem anime",
	[Key.animeStatusWatching]: "Đang xem",
	[Key.animeStatusCompleted]: "Đã hoàn thành",
	[Key.animeStatusPlanned]: "Dự định xem",
	[Key.animeStatusOnHold]: "Tạm hoãn",
	[Key.animeStatusDropped]: "Bỏ dở",
	[Key.animeFilterAll]: "Tất cả",
	[Key.animeYear]: "Năm",
	[Key.animeStudio]: "Studio",
	[Key.animeEmpty]: "Không có dữ liệu anime",
	[Key.animeEmptyBangumi]:
		"Vui lòng kiểm tra cấu hình Bangumi hoặc kết nối mạng",
	[Key.animeEmptyLocal]:
		"Vui lòng thêm dữ liệu anime trong tệp src/data/anime.ts",

	// Diary Page
	[Key.diarySubtitle]: "Chia sẻ cuộc sống mọi lúc, mọi nơi",
	[Key.diaryCount]: "mục nhật ký",
	[Key.diaryReply]: "Trả lời",
	[Key.diaryTips]: "Chỉ hiển thị 30 mục nhật ký mới nhất",
	[Key.diaryMinutesAgo]: "phút trước",
	[Key.diaryHoursAgo]: "giờ trước",
	[Key.diaryDaysAgo]: "ngày trước",

	// 404 Page
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "Không tìm thấy trang",
	[Key.notFoundDescription]:
		"Xin lỗi, trang bạn truy cập không tồn tại hoặc đã được di chuyển.",
	[Key.backToHome]: "Quay về trang chủ",

	// Music Player
	[Key.musicPlayer]: "Trình phát nhạc",
	[Key.musicPlayerShow]: "Hiện trình phát nhạc",
	[Key.musicPlayerHide]: "Ẩn trình phát nhạc",
	[Key.musicPlayerExpand]: "Mở rộng trình phát",
	[Key.musicPlayerCollapse]: "Thu gọn trình phát",
	[Key.musicPlayerPause]: "Tạm dừng",
	[Key.musicPlayerPlay]: "Phát",
	[Key.musicPlayerPrevious]: "Bài trước",
	[Key.musicPlayerNext]: "Bài tiếp theo",
	[Key.musicPlayerShuffle]: "Phát ngẫu nhiên",
	[Key.musicPlayerRepeat]: "Lặp tất cả",
	[Key.musicPlayerRepeatOne]: "Lặp một bài",
	[Key.musicPlayerVolume]: "Âm lượng",
	[Key.musicPlayerProgress]: "Tiến trình phát",
	[Key.musicPlayerCover]: "Ảnh bìa",
	[Key.musicPlayerPlaylist]: "Danh sách phát",
	[Key.musicPlayerLoading]: "Đang tải...",
	[Key.musicPlayerErrorPlaylist]: "Không tải được danh sách phát",
	[Key.musicPlayerErrorSong]:
		"Không thể tải bài hát hiện tại, đang chuyển bài khác",
	[Key.musicPlayerErrorEmpty]: "Danh sách phát không có bài hát",
	[Key.unknownSong]: "Bài hát không xác định",
	[Key.unknownArtist]: "Nghệ sĩ không xác định",

	// Albums Page
	[Key.albums]: "Album",
	[Key.albumsSubtitle]: "Lưu giữ những khoảnh khắc đẹp trong cuộc sống",
	[Key.albumsEmpty]: "Chưa có nội dung",
	[Key.albumsEmptyDesc]:
		"Chưa có album nào. Hãy thêm những kỷ niệm đẹp!",
	[Key.albumsBackToList]: "Quay lại danh sách album",

	// Devices Page
	[Key.devices]: "Thiết bị của tôi",
	[Key.devicesSubtitle]: "Những thiết bị tôi sử dụng hằng ngày",
	[Key.devicesViewDetails]: "Xem chi tiết",
	[Key.albumsPhotoCount]: "ảnh",
	[Key.albumsPhotosCount]: "ảnh",

	// Projects Page
	[Key.projects]: "Dự án",
	[Key.projectsSubtitle]: "Danh mục các dự án phát triển của tôi",
	[Key.projectsAll]: "Tất cả",
	[Key.projectsWeb]: "Ứng dụng Web",
	[Key.projectsMobile]: "Ứng dụng Mobile",
	[Key.projectsDesktop]: "Ứng dụng Desktop",
	[Key.projectsOther]: "Khác",
	[Key.projectTechStack]: "Công nghệ sử dụng",
	[Key.projectLiveDemo]: "Demo trực tiếp",
	[Key.projectSourceCode]: "Mã nguồn",
	[Key.projectDescription]: "Mô tả dự án",
	[Key.projectStatus]: "Trạng thái",
	[Key.projectStatusCompleted]: "Hoàn thành",
	[Key.projectStatusInProgress]: "Đang phát triển",
	[Key.projectStatusPlanned]: "Dự định",
	[Key.projectsTotal]: "Tổng dự án",
	[Key.projectsCompleted]: "Hoàn thành",
	[Key.projectsInProgress]: "Đang thực hiện",
	[Key.projectsTechStack]: "Thống kê công nghệ",
	[Key.projectsFeatured]: "Dự án nổi bật",
	[Key.projectsPlanned]: "Dự định",
	[Key.projectsDemo]: "Demo",
	[Key.projectsSource]: "Mã nguồn",
	[Key.projectsVisit]: "Xem dự án",
	[Key.projectsGitHub]: "GitHub",

	// RSS Page
	[Key.rss]: "Nguồn RSS",
	[Key.rssDescription]: "Đăng ký để nhận cập nhật mới nhất",
	[Key.rssSubtitle]:
		"Đăng ký RSS để nhận bài viết và cập nhật mới nhất ngay lập tức",
	[Key.rssLink]: "Liên kết RSS",
	[Key.rssCopyToReader]: "Sao chép vào trình đọc RSS",
	[Key.rssCopyLink]: "Sao chép",
	[Key.rssLatestPosts]: "Bài viết mới nhất",
	[Key.rssWhatIsRSS]: "RSS là gì?",
	[Key.rssWhatIsRSSDescription]:
		"RSS (Really Simple Syndication) là tiêu chuẩn xuất bản nội dung cập nhật thường xuyên. Với RSS, bạn có thể:",
	[Key.rssBenefit1]:
		"Nhận nội dung mới mà không cần truy cập website thủ công",
	[Key.rssBenefit2]:
		"Quản lý nhiều website trong một trình đọc duy nhất",
	[Key.rssBenefit3]: "Không bỏ lỡ các bài viết quan trọng",
	[Key.rssBenefit4]: "Trải nghiệm đọc sạch, không quảng cáo",
	[Key.rssHowToUse]:
		"Nên sử dụng Feedly, Inoreader hoặc các trình đọc RSS khác.",
	[Key.rssCopied]: "Đã sao chép liên kết RSS!",
	[Key.rssCopyFailed]:
		"Sao chép thất bại, vui lòng sao chép thủ công",

	// Atom Page
	[Key.atom]: "Nguồn Atom",
	[Key.atomDescription]: "Đăng ký để nhận cập nhật mới nhất",
	[Key.atomSubtitle]:
		"Đăng ký Atom để nhận bài viết và cập nhật mới nhất",
	[Key.atomLink]: "Liên kết Atom",
	[Key.atomCopyToReader]: "Sao chép vào trình đọc Atom",
	[Key.atomCopyLink]: "Sao chép",
	[Key.atomLatestPosts]: "Bài viết mới nhất",
	[Key.atomWhatIsAtom]: "Atom là gì?",
	[Key.atomWhatIsAtomDescription]:
		"Atom là định dạng XML dùng để xuất bản nội dung và bài viết. Với Atom, bạn có thể:",
	[Key.atomBenefit1]:
		"Nhận nội dung mới mà không cần truy cập website",
	[Key.atomBenefit2]:
		"Quản lý nhiều website trong một trình đọc",
	[Key.atomBenefit3]: "Không bỏ lỡ các cập nhật quan trọng",
	[Key.atomBenefit4]: "Trải nghiệm đọc gọn gàng, không quảng cáo",
	[Key.atomHowToUse]:
		"Nên dùng Feedly, Inoreader hoặc trình đọc Atom khác.",
	[Key.atomCopied]: "Đã sao chép liên kết Atom!",
	[Key.atomCopyFailed]:
		"Sao chép thất bại, vui lòng sao chép thủ công",

	// Wallpaper mode
	[Key.wallpaperBanner]: "Chế độ banner",
	[Key.wallpaperFullscreen]: "Toàn màn hình",
	[Key.wallpaperNone]: "Ẩn hình nền",

	// Skills Page
	[Key.skills]: "Kỹ năng",
	[Key.skillsSubtitle]: "Kỹ năng và chuyên môn của tôi",
	[Key.skillsFrontend]: "Phát triển Frontend",
	[Key.skillsBackend]: "Phát triển Backend",
	[Key.skillsDatabase]: "Cơ sở dữ liệu",
	[Key.skillsTools]: "Công cụ phát triển",
	[Key.skillsOther]: "Kỹ năng khác",
	[Key.skillLevel]: "Trình độ",
	[Key.skillLevelBeginner]: "Cơ bản",
	[Key.skillLevelIntermediate]: "Trung cấp",
	[Key.skillLevelAdvanced]: "Nâng cao",
	[Key.skillLevelExpert]: "Chuyên gia",
	[Key.skillExperience]: "Kinh nghiệm",
	[Key.skillYears]: "năm",
	[Key.skillMonths]: "tháng",
	[Key.skillsTotal]: "Tổng số kỹ năng",
	[Key.skillsExpert]: "Chuyên gia",
	[Key.skillsAdvanced]: "Nâng cao",
	[Key.skillsIntermediate]: "Trung cấp",
	[Key.skillsBeginner]: "Cơ bản",
	[Key.skillsAdvancedTitle]: "Kỹ năng chuyên môn",
	[Key.skillsProjects]: "Dự án liên quan",
	[Key.skillsDistribution]: "Phân bố kỹ năng",
	[Key.skillsByLevel]: "Theo trình độ",
	[Key.skillsByCategory]: "Theo danh mục",
	[Key.noData]: "Không có dữ liệu",

	// Timeline Page
	[Key.timeline]: "Dòng thời gian",
	[Key.timelineSubtitle]:
		"Hành trình phát triển và các cột mốc quan trọng",
	[Key.timelineEducation]: "Học vấn",
	[Key.timelineWork]: "Kinh nghiệm làm việc",
	[Key.timelineProject]: "Kinh nghiệm dự án",
	[Key.timelineAchievement]: "Thành tựu",
	[Key.timelinePresent]: "Hiện tại",
	[Key.timelineLocation]: "Địa điểm",
	[Key.timelineDescription]: "Mô tả chi tiết",
	[Key.timelineMonths]: "tháng",
	[Key.timelineYears]: "năm",
	[Key.timelineTotal]: "Tổng",
	[Key.timelineProjects]: "Dự án",
	[Key.timelineExperience]: "Kinh nghiệm làm việc",
	[Key.timelineCurrent]: "Trạng thái hiện tại",
	[Key.timelineHistory]: "Lịch sử",
	[Key.timelineAchievements]: "Thành tựu",
	[Key.timelineStartDate]: "Ngày bắt đầu",
	[Key.timelineDuration]: "Thời gian",

	// Password Protection
	[Key.passwordProtected]: "Nội dung được bảo vệ",
	[Key.passwordProtectedTitle]:
		"Nội dung này được bảo vệ bằng mật khẩu",
	[Key.passwordProtectedDescription]:
		"Vui lòng nhập mật khẩu để xem nội dung",
	[Key.passwordPlaceholder]: "Nhập mật khẩu",
	[Key.passwordUnlock]: "Mở khóa",
	[Key.passwordUnlocking]: "Đang mở khóa...",
	[Key.passwordIncorrect]: "Mật khẩu không đúng, vui lòng thử lại",
	[Key.passwordDecryptError]:
		"Giải mã thất bại, vui lòng kiểm tra mật khẩu",
	[Key.passwordRequired]: "Vui lòng nhập mật khẩu",
	[Key.passwordVerifying]: "Đang xác minh...",
	[Key.passwordDecryptFailed]: "Giải mã thất bại",
	[Key.passwordDecryptRetry]: "Vui lòng thử lại",
	[Key.passwordUnlockButton]: "Mở khóa",
	[Key.copyFailed]: "Sao chép thất bại:",
	[Key.syntaxHighlightFailed]: "Highlight code thất bại:",
	[Key.autoSyntaxHighlightFailed]:
		"Tự động highlight cũng thất bại:",
	[Key.decryptionError]: "Đã xảy ra lỗi khi giải mã:",

	// Last Modified Time Card
	[Key.lastModifiedPrefix]: "Thời gian kể từ lần chỉnh sửa: ",
	[Key.lastModifiedOutdated]: "Một số thông tin có thể đã lỗi thời",
	[Key.year]: "năm",
	[Key.month]: "tháng",
	[Key.day]: "ngày",
	[Key.hour]: "giờ",
	[Key.minute]: "phút",
	[Key.second]: "giây",

	// Site Stats
	[Key.siteStats]: "Thống kê website",
	[Key.siteStatsPostCount]: "Bài viết",
	[Key.siteStatsCategoryCount]: "Danh mục",
	[Key.siteStatsTagCount]: "Thẻ",
	[Key.siteStatsTotalWords]: "Tổng số từ",
	[Key.siteStatsRunningDays]: "Số ngày hoạt động",
	[Key.siteStatsLastUpdate]: "Hoạt động gần nhất",
	[Key.siteStatsDaysAgo]: "{days} ngày trước",
	[Key.siteStatsDays]: "{days} ngày",

	// Calendar Component
	[Key.calendarSunday]: "CN",
	[Key.calendarMonday]: "T2",
	[Key.calendarTuesday]: "T3",
	[Key.calendarWednesday]: "T4",
	[Key.calendarThursday]: "T5",
	[Key.calendarFriday]: "T6",
	[Key.calendarSaturday]: "T7",
	[Key.calendarJanuary]: "Th1",
	[Key.calendarFebruary]: "Th2",
	[Key.calendarMarch]: "Th3",
	[Key.calendarApril]: "Th4",
	[Key.calendarMay]: "Th5",
	[Key.calendarJune]: "Th6",
	[Key.calendarJuly]: "Th7",
	[Key.calendarAugust]: "Th8",
	[Key.calendarSeptember]: "Th9",
	[Key.calendarOctober]: "Th10",
	[Key.calendarNovember]: "Th11",
	[Key.calendarDecember]: "Th12",

	// Share Functionality
	[Key.shareArticle]: "Chia sẻ",
	[Key.generatingPoster]: "Đang tạo poster...",
	[Key.copied]: "Đã sao chép",
	[Key.copyLink]: "Sao chép liên kết",
	[Key.savePoster]: "Lưu poster",
	[Key.scanToRead]: "Quét để đọc",
	[Key.shareOnSocial]: "Chia sẻ",
	[Key.shareOnSocialDescription]:
		"Nếu bài viết này hữu ích, hãy chia sẻ với mọi người nhé!",

	// Profile Stats
	[Key.profileStatsLoading]: "Đang tải thống kê...",
	[Key.profileStatsPageViews]: "Lượt xem trang",
	[Key.profileStatsVisits]: "Lượt truy cập",
	[Key.profileStatsUnavailable]: "Không thể tải thống kê",

	// Layout Switch Button
	[Key.switchToGridMode]: "Chuyển sang dạng lưới",
	[Key.switchToListMode]: "Chuyển sang dạng danh sách",
};
