-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 16 Jan 2022 pada 12.48
-- Versi server: 5.7.33
-- Versi PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_gis`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_healths`
--

CREATE TABLE `data_healths` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `rumah_sakit` int(11) NOT NULL,
  `rumah_sakit_bersalin` int(11) NOT NULL,
  `poliklinik` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_healths`
--

INSERT INTO `data_healths` (`id`, `marker`, `rumah_sakit`, `rumah_sakit_bersalin`, `poliklinik`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 0, 0, 0, '-6.9450862151726', '106.91615584539882', '2022-01-16 07:27:39', '2022-01-16 07:27:39'),
(2, 'Warudoyong', 0, 0, 0, '-6.9334561478492835', '106.92310806577294', '2022-01-16 07:28:04', '2022-01-16 07:28:04'),
(3, 'Nyomplong', 1, 1, 1, '-6.928727357037752', '106.92203519225843', '2022-01-16 07:28:28', '2022-01-16 07:28:28'),
(4, 'Benteng', 0, 0, 1, '-6.925787814518486', '106.91512588682488', '2022-01-16 07:28:54', '2022-01-16 07:28:54'),
(5, 'Sukakarya', 0, 0, 0, '-6.9271936849659195', '106.90761577222318', '2022-01-16 07:29:18', '2022-01-16 07:29:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_livelihoods`
--

CREATE TABLE `data_livelihoods` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `pns` int(11) NOT NULL,
  `bumn` int(11) NOT NULL,
  `tni` int(11) NOT NULL,
  `polisi` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_livelihoods`
--

INSERT INTO `data_livelihoods` (`id`, `marker`, `pns`, `bumn`, `tni`, `polisi`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 126, 25, 15, 25, '-6.941337360386228', '106.9170999740916', '2022-01-16 07:13:46', '2022-01-16 07:13:46'),
(2, 'Warudoyong', 35, 9, 5, 0, '-6.934947198174836', '106.92435259904981', '2022-01-16 07:14:31', '2022-01-16 07:14:31'),
(3, 'Nyomplong', 83, 15, 5, 13, '-6.926128631981466', '106.9256400472672', '2022-01-16 07:15:24', '2022-01-16 07:15:24'),
(4, 'Benteng', 137, 30, 18, 50, '-6.922677843794353', '106.91911697629892', '2022-01-16 07:16:11', '2022-01-16 07:16:11'),
(5, 'Sukakarya', 112, 22, 4, 11, '-6.919951277256839', '106.90362468274918', '2022-01-16 07:16:55', '2022-01-16 07:16:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_lives`
--

CREATE TABLE `data_lives` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `lahir` int(11) NOT NULL,
  `mati` int(11) NOT NULL,
  `datang` int(11) NOT NULL,
  `pindah` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_lives`
--

INSERT INTO `data_lives` (`id`, `marker`, `lahir`, `mati`, `datang`, `pindah`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 264, 78, 465, 490, '-6.938227492276496', '106.91375260872628', '2022-01-16 07:20:30', '2022-01-16 07:20:30'),
(2, 'Warudoyong', 113, 35, 280, 267, '-6.932689320130129', '106.92452425881213', '2022-01-16 07:21:03', '2022-01-16 07:21:03'),
(3, 'Nyomplong', 85, 48, 314, 240, '-6.925574803479071', '106.92310806577294', '2022-01-16 07:21:42', '2022-01-16 07:21:42'),
(4, 'Benteng', 168, 45, 498, 435, '-6.923189073266511', '106.9146109075379', '2022-01-16 07:22:49', '2022-01-16 07:22:49'),
(5, 'Sukakarya', 264, 78, 465, 490, '-6.922081408710194', '106.90744411246087', '2022-01-16 07:23:26', '2022-01-16 07:23:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_populations`
--

CREATE TABLE `data_populations` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `laki_laki` int(11) NOT NULL,
  `perempuan` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_populations`
--

INSERT INTO `data_populations` (`id`, `marker`, `laki_laki`, `perempuan`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 8601, 8250, '-6.94968704157262', '106.91263682027116', '2022-01-16 06:52:32', '2022-01-16 06:52:32'),
(3, 'Warudoyong', 3339, 3251, '-6.937716279114311', '106.92375178988168', '2022-01-16 06:54:56', '2022-01-16 06:54:56'),
(4, 'Nyomplong', 3640, 3665, '-6.9238281093278', '106.92692753665771', '2022-01-16 06:56:08', '2022-01-16 06:56:08'),
(5, 'Benteng', 6418, 6345, '-6.921186754670651', '106.91302305473641', '2022-01-16 06:58:09', '2022-01-16 06:58:09'),
(6, 'Sukakarya', 8265, 7893, '-6.914412890503525', '106.90315261840274', '2022-01-16 06:59:22', '2022-01-16 06:59:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_religions`
--

CREATE TABLE `data_religions` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `islam` int(11) NOT NULL,
  `budha` int(11) NOT NULL,
  `hindu` int(11) NOT NULL,
  `katolik` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_religions`
--

INSERT INTO `data_religions` (`id`, `marker`, `islam`, `budha`, `hindu`, `katolik`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 16747, 31, 0, 16, '-6.943595196960255', '106.91332345932048', '2022-01-16 07:03:24', '2022-01-16 07:03:24'),
(2, 'Warudoyong', 6320, 105, 5, 58, '-6.935415813016735', '106.92289349107006', '2022-01-16 07:04:22', '2022-01-16 07:04:22'),
(3, 'Nyomplong', 5916, 592, 0, 256, '-6.92378550695064', '106.92439551399038', '2022-01-16 07:06:55', '2022-01-16 07:06:55'),
(4, 'Benteng', 12417, 41, 0, 53, '-6.921570178038114', '106.91671373962635', '2022-01-16 07:07:58', '2022-01-16 07:07:58'),
(5, 'Sukakarya', 16119, 7, 0, 7, '-6.917565518618452', '106.90521253555065', '2022-01-16 07:08:58', '2022-01-16 07:08:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_schools`
--

CREATE TABLE `data_schools` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `sd` int(11) NOT NULL,
  `mi` int(11) NOT NULL,
  `smp` int(11) NOT NULL,
  `mts` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_schools`
--

INSERT INTO `data_schools` (`id`, `marker`, `sd`, `mi`, `smp`, `mts`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 3, 0, 0, 0, '-6.93153907621163', '106.91529754658721', '2022-01-16 07:29:59', '2022-01-16 07:29:59'),
(2, 'Warudoyong', 2, 0, 0, 0, '-6.928727357037752', '106.92538255762372', '2022-01-16 07:30:27', '2022-01-16 07:30:27'),
(3, 'Nyomplong', 4, 1, 1, 1, '-6.930559236585278', '106.92220685202076', '2022-01-16 07:31:00', '2022-01-16 07:31:00'),
(4, 'Benteng', 7, 0, 3, 1, '-6.9277901135865925', '106.91804410278439', '2022-01-16 07:31:32', '2022-01-16 07:31:32'),
(5, 'Sukakarya', 5, 1, 1, 2, '-6.934435981451995', '106.90791617680729', '2022-01-16 07:31:53', '2022-01-16 07:31:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_worships`
--

CREATE TABLE `data_worships` (
  `id` int(11) NOT NULL,
  `marker` varchar(255) NOT NULL,
  `islam` int(11) NOT NULL,
  `gereja` int(11) NOT NULL,
  `pura` int(11) NOT NULL,
  `vihara` int(11) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_worships`
--

INSERT INTO `data_worships` (`id`, `marker`, `islam`, `gereja`, `pura`, `vihara`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Dayeuhluhur', 41, 0, 0, 0, '-6.936693851124935', '106.91679956950753', '2022-01-16 07:24:51', '2022-01-16 07:24:51'),
(2, 'Warudoyong', 27, 1, 0, 0, '-6.930772245372975', '106.92542547256431', '2022-01-16 07:25:11', '2022-01-16 07:25:11'),
(3, 'Nyomplong', 21, 2, 0, 2, '-6.927491899370553', '106.92315098071354', '2022-01-16 07:25:49', '2022-01-16 07:25:49'),
(4, 'Benteng', 25, 2, 0, 0, '-6.924339337553664', '106.91748620855682', '2022-01-16 07:26:25', '2022-01-16 07:26:25'),
(5, 'Sukakarya', 32, 0, 0, 0, '-6.924424542204119', '106.9049121309666', '2022-01-16 07:26:47', '2022-01-16 07:26:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `luas` float NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `districts`
--

INSERT INTO `districts` (`id`, `nama`, `luas`, `latitude`, `longitude`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Warudoyong', 7.61, '-6.9301741', '106.9159347', 1, '2022-01-16 06:45:28', '2022-01-16 07:47:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220106054419-create-user.js'),
('20220106061221-create-district.js'),
('20220106061606-create-village.js'),
('20220109105528-create-data-popoulation.js'),
('20220112101324-create-data-religion.js'),
('20220112105709-create-data-livelihood.js'),
('20220113043635-create-data-live.js'),
('20220113050204-create-data-worship.js'),
('20220113050248-create-data-health.js'),
('20220113050331-create-data-school.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('I1sy4m_SnBUxUIFDlvuR4JyYpzCV1t9d', 1642405812, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":1}}');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Widdy Arfiansyah', 'arvians', '$2b$10$dNqOvd9LX1uq.XsoheFWYOkpNUExfCy8tYLUgqqds0nmzvl15EJ1u', '2022-01-16 06:42:40', '2022-01-16 06:42:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `villages`
--

CREATE TABLE `villages` (
  `id` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `luas` float NOT NULL,
  `warna` varchar(255) NOT NULL,
  `geojson` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `villages`
--

INSERT INTO `villages` (`id`, `districtId`, `nama`, `luas`, `warna`, `geojson`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Dayeuhluhur', 2.33, '#ff0000', 'public\\geojson\\0c021eee-97d6-4e46-928b-4c87e7ace017.json', '2022-01-16 06:46:51', '2022-01-16 06:46:51'),
(2, 1, 'Warudoyong', 0.43, '#ffff00', 'public\\geojson\\25ac14f8-9bf3-4f68-aaaa-ba85167eab7e.json', '2022-01-16 06:47:09', '2022-01-16 06:47:09'),
(3, 1, 'Nyomplong', 0.54, '#80ff00', 'public\\geojson\\28fbcf58-031d-44f8-b3f5-087452f7d82d.json', '2022-01-16 06:47:29', '2022-01-16 06:47:29'),
(4, 1, 'Benteng', 1.28, '#00ffff', 'public\\geojson\\10deee81-587d-4283-b8a7-0faf58c41092.json', '2022-01-16 06:49:55', '2022-01-16 06:49:55'),
(5, 1, 'Sukakarya', 3.03, '#0080ff', 'public\\geojson\\6fd467a9-9c79-4c00-bcb4-957aa9a5df6c.json', '2022-01-16 06:50:18', '2022-01-16 06:50:18');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_healths`
--
ALTER TABLE `data_healths`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_livelihoods`
--
ALTER TABLE `data_livelihoods`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_lives`
--
ALTER TABLE `data_lives`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_populations`
--
ALTER TABLE `data_populations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_religions`
--
ALTER TABLE `data_religions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_schools`
--
ALTER TABLE `data_schools`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_worships`
--
ALTER TABLE `data_worships`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `villages`
--
ALTER TABLE `villages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `districtId` (`districtId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_healths`
--
ALTER TABLE `data_healths`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `data_livelihoods`
--
ALTER TABLE `data_livelihoods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `data_lives`
--
ALTER TABLE `data_lives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `data_populations`
--
ALTER TABLE `data_populations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `data_religions`
--
ALTER TABLE `data_religions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `data_schools`
--
ALTER TABLE `data_schools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `data_worships`
--
ALTER TABLE `data_worships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `villages`
--
ALTER TABLE `villages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `villages`
--
ALTER TABLE `villages`
  ADD CONSTRAINT `villages_ibfk_1` FOREIGN KEY (`districtId`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
