---
title: CProductInfo_SetRichPresenceLocalization_Request_LanguageSection
---

```csharp
public interface CProductInfo_SetRichPresenceLocalization_Request_LanguageSection : ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request_LanguageSection>, INativeHandle
```

#### Implements

## Properties

### **Language** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request_LanguageSection.cs#L13)

```csharp
string Language { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Tokens** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request_LanguageSection.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CProductInfo_SetRichPresenceLocalization_Request_Token> Tokens { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CProductInfo_SetRichPresenceLocalization_Request_Token](/docs/api/shared/protobufdefinitions/cproductinfo_setrichpresencelocalization_request_token)>

