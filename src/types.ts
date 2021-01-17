export interface HackerNewsStory {
  by:          string;
  descendants: number;
  id:          number;
  score:       number;
  time:        number;
  kids:        number[];
  text:        string;
  title:       string;
  url:         string;
  type:        "story";
}
