/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to News.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 8080 // Change this to your server port
    return `http://localhost:${port}/news`;
  }
}
