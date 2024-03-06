import React from "react";
import { baseURL } from "@/lib/axiosClient";
import { styles } from "./Styles";
import { Page, Text, View, Link, Image } from "@react-pdf/renderer";
import { SearchParams, Site } from "@/types/general";

interface Props {
  sites: Site[];
  searchParams: SearchParams;
  dateLong: string;
}

function Results({ dateLong, sites, searchParams }: Props) {
  function getPicture(metadata: Record<string, string>[]) {
    const picture = metadata.find((element) => element["type"] === "image");
    return picture;
  }

  function getLocation(metadata: Record<string, string>[]) {
    const location = metadata.find((element) => element["type"] === "location");
    return location;
  }

  return (
    <Page size="LETTER" wrap={false}>
      <View style={styles.header} fixed>
        <View style={styles.headerText}>
          <Text style={styles.title}>BLACKBIRD</Text>
          <Text style={styles.smallText}>
            <Text style={styles.username}>{searchParams["username"]}</Text> •{" "}
            {dateLong}
          </Text>
        </View>
        <Image
          style={styles.logo}
          src={
            "https://raw.githubusercontent.com/p1ngul1n0/badges/main/badges/20.png"
          }
        ></Image>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.topic}>Results</Text>
          <View>
            <Text style={styles.subtopic}>Found ({sites.length})</Text>
            <Text style={styles.mediumText}>
              The searched username was found on the following sites:
            </Text>
            {sites.map((obj) => {
              const picture = getPicture(obj.metadata);
              const location = getLocation(obj.metadata);
              return (
                <View key={obj.id} style={styles.siteItem} wrap={false}>
                  <View style={styles.line}>
                    <Text style={styles.appName}>{obj.app}</Text>
                    <Text style={styles.id}>#{obj.id}</Text>
                  </View>
                  <View style={styles.line}>
                    <Text style={styles.mediumTextBold}>Result:</Text>
                    <Text style={styles.result}>{obj.status}</Text>
                  </View>
                  <View style={styles.line}>
                    <Text style={styles.mediumTextBold}>URL:</Text>
                    <Link style={styles.link} src={obj.url}>
                      {obj.url}
                    </Link>
                  </View>
                  <View style={styles.line}>
                    <Text style={styles.mediumTextBold}>HTTP STATUS:</Text>
                    <Text style={styles.httpStatus}>{obj["response-status"]}</Text>
                  </View>
                  {obj.metadata.length > 0 ? (
                    <>
                      <View style={styles.line}>
                        <Text style={styles.mediumTextBold}>Metadata</Text>
                      </View>
                      <View style={styles.metadataDetails}>
                        {picture && location && (
                          <View>
                            <Image
                              style={styles.avatar}
                              src={
                                picture
                                  ? baseURL + "image?url=" + picture["value"]
                                  : baseURL +
                                    "image?url=https://via.placeholder.com/100x100.png?text=NO+IMAGE"
                              }
                            />
                            <Text style={styles.smallText}>
                              {location ? "📍" + location["value"] : ""}
                            </Text>
                          </View>
                        )}
                        <View style={styles.rightPanel}>
                          {obj.metadata
                            .filter((d) => d["type"] === "generic-data")
                            .map((d) => (
                              <View style={styles.line} key={d["key"]}>
                                <Text style={styles.smallTextBold}>{d.key}:</Text>
                                <Text style={styles.smallText}>{d.value}</Text>
                              </View>
                            ))}
                        </View>
                      </View>
                    </>
                  ) : null}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Page>
  );
}

export default Results;
