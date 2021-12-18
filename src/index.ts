import NxWeiboOss from '@jswork/next-weibo-oss';
import NxLcOptions from '@afeiship/next-leancloud-options';

const WEIBO_LC_ID = '60f768f6d9f1465d3b1d5c43';
const fetch = window.fetch.bind(window);

interface UploadEvent {
  target: {
    value: {
      url: string;
      file: File;
    }[];
  };
}

export default async (inEvent: UploadEvent): Promise<string[]> => {
  const lcOpts = new NxLcOptions({ fetch, id: WEIBO_LC_ID });
  const lcRes = await lcOpts.get();
  const weiboOss = new NxWeiboOss(lcRes.value);
  const files = inEvent.target.value.map((item) => item.file);
  return new Promise((resolve) => {
    weiboOss.uploads(files).then((res) => {
      const urls = res.map((it) => it.url);
      resolve(urls);
    });
  });
};
