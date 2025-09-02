export function slugify(str) {
	return str
		.toLowerCase() // SLUG-001
		.replace(/_/g, " ") // Treat underscores as spaces
		.replace(/[^a-z0-9\s]/g, "") // SLUG-002
		.trim() // Clean leading/trailing spaces
		.replace(/\s+/g, "-") // SLUG-003 & SLUG-004
		.replace(/^-+|-+$/g, ""); // SLUG-005
}
