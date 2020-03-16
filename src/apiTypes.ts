export interface ManifestData {
  photo_manifest: {
    photos: PhotoManifestData[];
  };
}

export interface PhotoManifestData {
  sol: number;
  earth_date: string;
  total_photos: number;
  cameras: string[];
}

export interface PhotoData {
  id: number;
  sol: number;
  img_src: string;
  earth_date: string;
  cameras: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
}