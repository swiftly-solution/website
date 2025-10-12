---
title: CCommunity_GetGamePersonalDataCategories_Response
---

```csharp
public interface CCommunity_GetGamePersonalDataCategories_Response : ITypedProtobuf<CCommunity_GetGamePersonalDataCategories_Response>, INativeHandle
```

#### Implements

## Properties

### AppAssetsBasename

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataCategories_Response.cs#L16)

```csharp
string AppAssetsBasename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Categories

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataCategories_Response.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CCommunity_GamePersonalDataCategoryInfo> Categories { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCommunity_GamePersonalDataCategoryInfo](/docs/api/shared/protobufdefinitions/ccommunity_gamepersonaldatacategoryinfo)>

