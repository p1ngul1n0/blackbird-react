import React from "react";
import { styles } from "./Styles";
import { Page, Text, Link, View, Image } from "@react-pdf/renderer";
import { SearchParams } from "@/types/general";

interface Props {
  searchParams: SearchParams;
  dateLong: string;
}

function Cover({ dateLong, searchParams }: Props) {
  return (
    <Page size="LETTER">
      <Image
        style={styles.background}
        src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80"
      />
      <View style={styles.container}>
        <View style={styles.coverHeader}>
          <Image
            style={styles.logoCover}
            src="https://raw.githubusercontent.com/p1ngul1n0/badges/main/badges/20.png"
          />
          <Text style={styles.title}>BLACKBIRD</Text>
          <Text style={styles.smallText}>Made with ❤️ by @p1ngul1n0</Text>
          <Link style={styles.linkCover} src="https://p1ngul1n0.com">
            p1ngul1n0.com
          </Link>
        </View>
        <View style={styles.usernameInfo}>
          <Text style={styles.smallTextBold}>Verified username</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>🎯</Text>
            <Text style={styles.usernameCover}>{searchParams["username"]}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={{ marginRight: "25" }}>
            <Text style={styles.smallTextCover}>Date</Text>
            <Text style={styles.smallTextCover}>Execution Time</Text>
            <Text style={styles.smallTextCover}>Nº of sites </Text>
          </View>
          <View>
            <Text style={styles.smallText}>{dateLong}</Text>
            <Text style={styles.smallText}>
              {searchParams["execution-time"]} seconds
            </Text>
            <Text style={styles.smallText}>{searchParams["sites-number"]}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

export default Cover;
