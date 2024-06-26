/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    images: Image;
    menu_item: MenuItem;
    pages: Page;
    users: User;
    videos: Video;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'navigation-menu': NavigationMenu;
    settings: Settings;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: number;
  description?: string | null;
  blurhash?: string | null;
  webp?: {
    filename?: string | null;
    filesize?: number | null;
    width?: number | null;
    mimeType?: string | null;
    height?: number | null;
    url?: string | null;
    sizes?: {
      xs?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      sm?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      md?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      lg?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      xl?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      xxl?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      xxxl?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
      opengraph?: {
        filename?: string | null;
        filesize?: number | null;
        width?: number | null;
        mimeType?: string | null;
        height?: number | null;
        url?: string | null;
      };
    };
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    xs?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    sm?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    md?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    lg?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    xl?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    xxl?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    xxxl?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    opengraph?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu_item".
 */
export interface MenuItem {
  id: number;
  title: string;
  template: 'Default' | 'Expandable';
  default?: {
    externalLink?: boolean | null;
    referenceToPage?: (number | null) | Page;
    externalUrl?: string | null;
    newTab?: boolean | null;
    icon?: {
      name?: string | null;
      right?: boolean | null;
    };
  };
  expandable?: {
    icon?: {
      name?: string | null;
    };
    children?: (number | MenuItem)[] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  defaultFields?: {
    excerpt?: string | null;
    featuredImage?: number | Image | null;
  };
  homeFields?: {
    isPage?: boolean | null;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Image | null;
  };
  title: string;
  slug?: string | null;
  template: 'Default' | 'Home';
  route?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  fullName?: string | null;
  role: 'admin' | 'editor';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos".
 */
export interface Video {
  id: number;
  blurhash?: string | null;
  webp?: {
    filename?: string | null;
    filesize?: number | null;
    width?: number | null;
    mimeType?: string | null;
    height?: number | null;
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-menu".
 */
export interface NavigationMenu {
  id: number;
  logo?: number | Image | null;
  uploadAlternateLogo?: boolean | null;
  alternateLogo?: number | Image | null;
  routes?: (number | MenuItem)[] | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: number;
  icon?: {
    library?: string | null;
    type?: ('filled' | 'outlined') | null;
    corners?: ('' | 'rounded' | 'sharp') | null;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Image | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}