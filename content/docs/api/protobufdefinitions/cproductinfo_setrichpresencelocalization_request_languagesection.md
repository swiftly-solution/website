---
title: CProductInfo_SetRichPresenceLocalization_Request_LanguageSection
---

# Interface CProductInfo_SetRichPresenceLocalization_Request_LanguageSection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request_LanguageSection.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CProductInfo_SetRichPresenceLocalization_Request_LanguageSection : ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request_LanguageSection>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CProductInfo_SetRichPresenceLocalization_Request_LanguageSection>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Language

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request_LanguageSection.cs#L13)

```csharp
string Language { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Tokens

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CProductInfo_SetRichPresenceLocalization_Request_LanguageSection.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CProductInfo_SetRichPresenceLocalization_Request_Token> Tokens { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CProductInfo_SetRichPresenceLocalization_Request_Token](/docs/api/protobufdefinitions/cproductinfo_setrichpresencelocalization_request_token)>

