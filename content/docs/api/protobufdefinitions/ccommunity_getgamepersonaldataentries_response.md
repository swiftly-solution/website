---
title: CCommunity_GetGamePersonalDataEntries_Response
---

# Interface CCommunity_GetGamePersonalDataEntries_Response

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCommunity_GetGamePersonalDataEntries_Response : ITypedProtobuf<CCommunity_GetGamePersonalDataEntries_Response>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCommunity_GetGamePersonalDataEntries_Response>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ContinueText

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L22)

```csharp
string ContinueText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ContinueToken

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L19)

```csharp
string ContinueToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Entries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<string> Entries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### Gceresult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L13)

```csharp
uint Gceresult { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

