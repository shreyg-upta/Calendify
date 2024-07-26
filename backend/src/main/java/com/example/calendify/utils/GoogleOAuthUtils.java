// import com.google.api.client.auth.oauth2.Credential;
// import com.google.api.client.auth.oauth2.GoogleAuthorizationCodeFlow;
// import com.google.api.client.auth.oauth2.TokenResponse;
// import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
// import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
// import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
// import com.google.api.client.http.javanet.NetHttpTransport;
// import com.google.api.client.json.JsonFactory;
// import com.google.api.client.json.gson.GsonFactory;
// import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
// import com.google.api.client.util.store.FileDataStoreFactory;

// import java.io.FileReader;
// import java.io.IOException;
// import java.security.GeneralSecurityException;
// import java.util.Collections;

// public class GoogleOAuthUtils {

//     private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
//     private static final String CLIENT_SECRET_JSON_PATH = "/path/to/your/client_secret.json";
//     private static final String REDIRECT_URI = "YOUR_REDIRECT_URI";

//     public static Credential exchangeAuthorizationCode(String authorizationCode) throws GeneralSecurityException, IOException {
//         NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();

//         // Load client secrets.
//         GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new FileReader(CLIENT_SECRET_JSON_PATH));

//         // Set up the authorization code flow.
//         com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow flow = new com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow.Builder(
//                 HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, Collections.singleton("https://www.googleapis.com/auth/calendar"))
//                 .setDataStoreFactory(new FileDataStoreFactory(new java.io.File("tokens")))
//                 .setAccessType("offline")
//                 .build();

//         // Exchange the authorization code for a token.
//         TokenResponse tokenResponse = new GoogleAuthorizationCodeTokenRequest(
//                 HTTP_TRANSPORT, JSON_FACTORY, clientSecrets.getDetails().getClientId(), 
//                 clientSecrets.getDetails().getClientSecret(), authorizationCode, REDIRECT_URI)
//                 .execute();

//         return flow.createAndStoreCredential(tokenResponse, "user");
//     }
// }
