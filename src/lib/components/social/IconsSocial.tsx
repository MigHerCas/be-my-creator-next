import type { FC } from "react";
import NextLink from "next/link";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

type SocialPlatforms = "LinkedIn" | "Twitter" | "Facebook" | "Instagram";

interface IconSocialProps {
  variant: SocialPlatforms;
  href: string;
}

const IconSocial: FC<IconSocialProps> = ({ variant, href }) => {
  // TODO: align colors with theme
  const fillColor = useColorModeValue("#000", "#fff");
  const iconVariants = {
    Facebook: (
      <svg
        height="18"
        viewBox="0 0 15 28"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m13.9294562 5.0372116c-.826716-.15867167-1.9433343-.27720341-2.6455141-.27720341-1.90153792 0-2.02506195.7933256-2.02506195 2.06266621v2.25960067h4.75325905l-.4143248 4.68071053h-4.33893425v14.2370144h-5.95159363v-14.2370144h-3.05894949v-4.68071053h3.05894949v-2.89520408c0-3.96573311 1.94237899-6.18707099 6.81919618-6.18707099 1.694387 0 2.9344042.23800096 4.5460967.55533447z"
          fill={fillColor}
        />
      </svg>
    ),
    Instagram: (
      <svg
        height="18"
        viewBox="0 0 30 30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m15 2.5c4.07122 0 4.5534163.0154942 6.1611808.0888495 1.4865951.0678476 2.2939272.3162389 2.8312609.5249868.7116434.2765955 1.219623.6070576 1.7531437 1.1405783.5335206.5335207.8639828 1.0415003 1.1405177 1.7531437.2088085.5373337.4571997 1.3446658.5250474 2.8312004.0733553 1.6078251.0888495 2.0900213.0888495 6.1612413s-.0154942 4.5534163-.0888495 6.1611808c-.0678477 1.4865951-.3162389 2.2939272-.5250474 2.8312609-.2765349.7116434-.6069971 1.219623-1.1405177 1.7531437-.5335207.5335206-1.0415003.8639828-1.7531437 1.1405177-.5373337.2088085-1.3446658.4571999-2.8312609.5250474-1.6075225.0733553-2.0897186.0888495-6.1611808.0888495-4.0714621 0-4.5536583-.0154942-6.1611808-.0888495-1.4865951-.0678475-2.2939272-.3162389-2.8312004-.5250474-.7117039-.2765349-1.2196835-.6069971-1.7532042-1.1405177-.5335207-.5335207-.8639828-1.0415003-1.1405178-1.7531437-.2088084-.5373337-.4571997-1.3446658-.5250473-2.8312004-.0733553-1.607825-.0888495-2.0900213-.0888495-6.1612413s.0154942-4.5534162.0888495-6.1611807c.0678476-1.4865952.3162389-2.2939273.5250473-2.831261.276535-.7116434.6069971-1.219623 1.1405178-1.7531437s1.0415003-.8639828 1.7532042-1.1405783c.5372732-.2087479 1.3446053-.4571392 2.8311399-.5249868 1.6078251-.0733553 2.0900213-.0888495 6.1612413-.0888495zm-.0000298-2.5c-4.0737851 0-4.5845415.01726735-6.184451.09026657-1.5966347.07288014-2.6869786.3264125-3.6411487.69724378-.9863826.38333525-1.8228965.89623515-2.6567906 1.73012915-.833894.833894-1.3467939 1.6704079-1.7301291 2.6567905-.37083127.9541701-.62436364 2.0445141-.69724377 3.6411487-.07299922 1.59985-.09020703 2.1106659-.09020703 6.1844511s.01720781 4.584601.09020703 6.184451c.07288013 1.5966347.3264125 2.6869787.69724377 3.6411487.3833352.986323.8962351 1.8228965 1.7301291 2.6567905.8338941.8338941 1.670408 1.346794 2.6567906 1.7301292.9541701.3708313 2.044514.6243637 3.6411487.6972437 1.5999095.0729993 2.1106659.0902071 6.184451.0902071 4.0737852 0 4.5846011-.0172078 6.184451-.0902071 1.5966347-.07288 2.6869788-.3264124 3.6411488-.6972437.9863825-.3833352 1.8228964-.8962351 2.6567905-1.7301292.8338941-.833894 1.346794-1.6704079 1.7301292-2.6567905.3708313-.95417.6243636-2.044514.6972437-3.6411487.0729993-1.59985.0902666-2.1106658.0902666-6.184451s-.0172673-4.5846011-.0902666-6.1844511c-.0728801-1.5966346-.3264124-2.6869786-.6972437-3.6411487-.3833352-.9863826-.8962351-1.8228965-1.7301292-2.6567905s-1.670408-1.3467939-2.6567905-1.73012915c-.95417-.37083128-2.0445141-.62436364-3.6411488-.69724378-1.5998499-.07299922-2.1106658-.09026657-6.184451-.09026657zm.0000298 7.5c-4.1421173 0-7.5 3.3578827-7.5 7.5 0 4.1421172 3.3578827 7.5 7.5 7.5 4.1421172 0 7.5-3.3578828 7.5-7.5 0-4.1421173-3.3578828-7.5-7.5-7.5zm0 12.5c-2.7613904 0-5-2.2386096-5-5s2.2386096-5 5-5 5 2.2386096 5 5-2.2386096 5-5 5zm10-13.3333609c0 .9204832-.746156 1.6666942-1.6666392 1.6666942-.9204831 0-1.6666941-.746211-1.6666941-1.6666942s.746211-1.6666391 1.6666941-1.6666391c.9204832 0 1.6666392.7461559 1.6666392 1.6666391z"
          fill={fillColor}
        />
      </svg>
    ),
    Twitter: (
      <svg
        height="18"
        viewBox="0 0 28 23"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8.97584055 22.5806452c10.22567225 0 15.81757935-8.6865991 15.81757935-16.21892648 0-.24683581-.0048775-.49256037-.0159329-.73695113 1.0853884-.80452257 2.0290063-1.80842539 2.7734091-2.95147206-.996186.45366227-2.0681344.75951201-3.1926503.8973222 1.1478191-.7054993 2.0290063-1.82220645 2.4445624-3.1531862-1.0743329.65293137-2.2636646 1.12782087-3.5299509 1.38354767-1.014395-1.10792729-2.4591948-1.8009792-4.0579044-1.8009792-3.0703898 0-5.5601498 2.55293389-5.5601498 5.70000759 0 .44743853.0488826.88231856.1441548 1.29975017-4.62021666-.23816715-8.71724895-2.50658969-11.45890055-5.9557344-.47787871.84219813-.75285679 1.82109507-.75285679 2.86500731 0 1.97779851.98144518 3.72365366 2.4738271 4.74500515-.91175225-.02878452-1.76855225-.28573391-2.51783226-.71316774-.00130065.02378323-.00130065.04767774-.00130065.07268371 0 2.76109381 1.91660903 5.06585841 4.46012902 5.58853671-.46682321.1302529-.9582503.2004917-1.46550192.2004917-.35811096 0-.7064671-.0363418-1.04506839-.102802.70776774 2.2647549 2.75996904 3.9128093 5.19347608 3.9592648-1.9030606 1.5289151-4.29993284 2.4400186-6.90458317 2.4400186-.44861417 0-.89105032-.0262285-1.32622451-.0789077 2.46049549 1.6167137 5.38174449 2.5604913 8.52171869 2.5604913"
          fill={fillColor}
        />
      </svg>
    ),
    LinkedIn: (
      <svg
        height="18"
        viewBox="0 0 30 30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m27 0h-24c-1.65 0-3 1.35-3 3v24c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-24c0-1.65-1.35-3-3-3zm-18 25.5h-4.5v-13.5h4.5zm-2.25-16.05c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7zm18.75 16.05h-4.5v-7.95c0-1.1999412-1.05-2.25-2.25-2.25s-2.25 1.0500588-2.25 2.25v7.95h-4.5v-13.5h4.5v1.8c.75-1.2 2.4-2.1 3.75-2.1 2.85 0 5.25 2.4 5.25 5.25z"
          fill={fillColor}
        />
      </svg>
    ),
  } as Record<SocialPlatforms, JSX.Element>;

  return (
    <NextLink href={href}>
      <IconButton aria-label="theme toggle" icon={iconVariants[variant]} />
    </NextLink>
  );
};

export default IconSocial;