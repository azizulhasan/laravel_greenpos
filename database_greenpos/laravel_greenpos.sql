-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2020 at 02:59 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_greenpos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_slug`, `created_at`, `updated_at`) VALUES
(34, 'Fruits', 'fruits', NULL, '2020-08-28 13:48:36'),
(35, 'Vagitables', 'vagitable', NULL, '2020-09-15 01:30:51'),
(36, 'Computer', 'computer', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_08_28_094907_create_categories_table', 2),
(5, '2020_08_28_170118_create_sub_categories_table', 3),
(6, '2020_08_29_050411_create_products_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_price` double NOT NULL,
  `featured_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gallery_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gallery_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gallery_3` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gallery_4` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `sub_category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_description`, `product_price`, `featured_image`, `gallery_1`, `gallery_2`, `gallery_3`, `gallery_4`, `category_id`, `sub_category_id`, `created_at`, `updated_at`) VALUES
(3, 'dgad', 'asdfa', 353, '1598698501_nJGda4eLvu_error-img.png', '1598698501_pVMSE6D0s0_product-pic.jpg', '1598698501_tTgabMaEKY_product-pic-2.jpg', '1598698501_dWLoNn1iY8_product-pic-3.jpg', '1598698501_ZJqsS71Cm4_product-pic-4.jpg', 35, 17, NULL, NULL),
(4, 'dgad', 'asdfa', 353, '1598698533_GD4PTrOV0P_error-img.png', '1598698533_CEzlqDbmwM_product-pic.jpg', '1598698533_FqPEqylliE_product-pic-2.jpg', '1598698533_llJwwmh2SP_product-pic-3.jpg', '1598698533_hlD1KFRpFM_product-pic-4.jpg', 35, 17, NULL, NULL),
(5, 'Banana', 'banana', 34, '1598698656_p4fSKtb5SF_avatar-1.jpg', '1598698656_ToFXL4ouys_avatar-1.jpg', '1598698656_FCB1gNiIPc_avatar-2 - Copy.jpg', '1598698656_X90Aajfqpw_avatar-2.jpg', '1598698656_fef4iNXhOw_avatar-3.jpg', 35, 17, NULL, NULL),
(6, 'mango', 'mango', 323, '1598698744_PFleA3UeSX_avatar-2 - Copy.jpg', '1598698744_XLROgy4lnz_avatar-1.jpg', '1598698744_e4hGo0Yp6l_avatar-2 - Copy.jpg', '1598698744_bqW4nJUPtm_avatar-2.jpg', '1598698744_MhXLM4aP7j_avatar-3.jpg', 34, 17, NULL, NULL),
(7, 'Lemon', 'lemon', 123, '1598698838_Fu4nT5ySvU_avatar-1.jpg', '1598698838_267DXF7aP1_avatar-1.jpg', '1598698838_RATBWo54T5_avatar-2 - Copy.jpg', '1598698838_Ttn1Fry8MS_avatar-2.jpg', '1598698838_msiMdoCHO2_avatar-3.jpg', 34, 17, NULL, NULL),
(10, 'SDFAS', 'sfSA', 34, '1606663737_0je2zvSSrh_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1600368543_qiQUuYYqfj_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1600368544_cgNMCcKpXu_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1600368544_DJClPGj1Q4_doctor-character-background_1270-84 - Copy - Copy.jpg', '1600368544_r8kf8ycviG_doctor-character-background_1270-84 - Copy.jpg', 36, 20, NULL, '2020-11-29 09:28:57'),
(11, 'Lemon', 'lemon', 123, '1600409811_0NETN44Eb5_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1600409812_5Kdhkqa5ac_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1600409812_mc1pC28gko_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1600409812_AkhrWnR6Lu_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1600409812_hjVUbwXNfG_doctor-character-background_1270-84 - Copy - Copy.jpg', 34, 17, NULL, NULL),
(12, 'Lemon', 'lemon', 123, '1600409814_SBFL7O4uvD_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1600409814_CwjZpayKPh_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1600409814_WJ46jkKZLM_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1600409814_HRxmqAhr54_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1600409814_MbPikWJ2hQ_doctor-character-background_1270-84 - Copy - Copy.jpg', 34, 17, NULL, NULL),
(18, 'hasan', 'hasan', 12, '1600410319_5V3q15RARt_doctor-character-background_1270-84.jpg', '1600410319_XcIdwZtKEQ_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1600410320_M22ZG2Smjz_doctor-character-background_1270-84 - Copy - Copy.jpg', '1600410320_1zko4BeExW_doctor-character-background_1270-84 - Copy.jpg', '1600410320_NQxqBnuKJX_doctor-character-background_1270-84.jpg', 36, 17, NULL, NULL),
(19, 'SDsa', 'ASDas', 12, '1601353626_u8xbXeZsNq_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1601353626_uAWgqOYhJi_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1601353626_s8B336TW4o_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1601353626_ccPh1GpExK_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1601353626_3zVe0n4vAC_doctor-character-background_1270-84 - Copy - Copy.jpg', 35, 17, NULL, NULL),
(20, 'This is a test product final', 'This is a test product\'s  description. final', 1000, '1606663829_drX7SH8oh4_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1606663829_6pL1knmUW3_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1606663829_QHslJa8Veg_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1606663829_6aLXhxHbbY_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1606663829_xby1VbOf3c_doctor.jpg', 35, 20, NULL, '2020-11-29 09:30:29'),
(21, 'Product test', 'Descripttion', 12, '1609249532_xX73FL1m9K_1.jpg', '1609249532_OK3OVOQNAP_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy - Copy.jpeg', '1609249532_No7Ilozpo7_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn - Copy.jpeg', '1609249532_5KAU9Oq6qn_48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg', '1609249532_AWSl9Vn6NL_doctor.jpg', 34, 18, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sub_category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_category_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `sub_category_name`, `sub_category_slug`, `category_id`, `created_at`, `updated_at`) VALUES
(17, 'laptop', 'Laptop', 36, NULL, '2020-08-28 13:51:11'),
(18, 'laptop', 'Laptop', 36, NULL, '2020-08-28 13:50:51'),
(20, 'Tomato', 'tomato', 35, NULL, '2020-10-20 08:34:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'hasan', 'admin@gmail.com', NULL, '$2y$10$.oR6ruloOrrbxyiIfymNFelI3/fFiZZyph8K0.vJDAVcjZr5D5vPG', 'BEhZzygjaSeswBw4uUhEQtY55uPD25ce9eefy7rCx1hUy5XxnyJZWP9wZlDE', '2020-08-27 06:56:56', '2020-08-27 06:56:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_sub_category_id_foreign` (`sub_category_id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`);

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
