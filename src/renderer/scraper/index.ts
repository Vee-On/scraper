import Scraper from './core/index';
import heads from './heads';
import mediaType, {
  getHeadsByMediaType,
  getRegularByMediaType
} from './mediaType';

const scraper = new Scraper();
scraper.loadHead(heads);
export default scraper;
export { heads, mediaType, getHeadsByMediaType, getRegularByMediaType };
