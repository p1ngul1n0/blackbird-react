import React from "react";
import { basePath } from "../Config/api";
import { styles } from "./Styles";
import { Page, Text, View, Link, Image } from "@react-pdf/renderer";

function Results({ dateLong, foundSites, searchParams }) {
  function getPicture(metadata) {
    let picture = metadata.find((element) => element["type"] === "image");
    return picture;
  }

  function getLocation(metadata) {
    let location = metadata.find((element) => element["type"] === "location");
    return location;
  }

  return (
    <Page size="LETTER" style={styles.page} wrap={false}>
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
        <View bookmark="Results">
          <Text style={styles.topic}>Results</Text>
          <View bookmark="Found">
            <Text style={styles.subtopic}>Found ({foundSites.length})</Text>
            <Text style={styles.mediumText}>
              The searched username was found on the following sites:
            </Text>
            {foundSites.map((obj) => {
              let picture = getPicture(obj.metadata);
              let location = getLocation(obj.metadata);
              return (
                <View
                  style={styles.siteItem}
                  bookmark={obj.app}
                  id={obj.id}
                  wrap={false}
                >
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
                    <Text style={styles.httpStatus}>
                      {obj["response-status"]}
                    </Text>
                  </View>
                  {obj.metadata.length > 0 ? (
                    <>
                      <View style={styles.line}>
                        <Text style={styles.mediumTextBold}>Metadata</Text>
                      </View>
                      <View style={styles.metadataDetails}>
                        {picture && location && (
                          <View style={styles.leftPanel}>
                            <Image
                              style={styles.avatar}
                              src={
                                picture
                                  ? basePath + "image?url=" + picture["value"]
                                  : basePath +
                                    "image?url=https://via.placeholder.com/100x100.png?text=NO+IMAGE"
                              }
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src =
                                  basePath +
                                  "image?url=https://via.placeholder.com/100x100.png?text=NO+IMAGE";
                              }}
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
                                <Text style={styles.smallTextBold}>
                                  {d.key}:
                                </Text>
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
