---
title: CCommunity_GetGamePersonalDataCategories_Response
---

# Interface CCommunity_GetGamePersonalDataCategories_Response

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataCategories_Response.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCommunity_GetGamePersonalDataCategories_Response : ITypedProtobuf<CCommunity_GetGamePersonalDataCategories_Response>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCommunity_GetGamePersonalDataCategories_Response>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AppAssetsBasename

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataCategories_Response.cs#L16)

```csharp
string AppAssetsBasename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Categories

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataCategories_Response.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CCommunity_GamePersonalDataCategoryInfo> Categories { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCommunity_GamePersonalDataCategoryInfo](/docs/api/protobufdefinitions/ccommunity_gamepersonaldatacategoryinfo)>

