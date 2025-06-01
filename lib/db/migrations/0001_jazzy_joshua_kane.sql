CREATE TABLE `location_log_image` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`location_log_id` integer NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`location_log_id`) REFERENCES `location_log`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `location_log_image_key_unique` ON `location_log_image` (`key`);