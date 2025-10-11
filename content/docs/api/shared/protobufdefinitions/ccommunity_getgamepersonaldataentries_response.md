---
title: CCommunity_GetGamePersonalDataEntries_Response
---

```csharp
public interface CCommunity_GetGamePersonalDataEntries_Response : ITypedProtobuf<CCommunity_GetGamePersonalDataEntries_Response>, INativeHandle
```

#### Implements

## Properties

### **ContinueText** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L22)

```csharp
string ContinueText { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ContinueToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L19)

```csharp
string ContinueToken { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Entries** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<string> Entries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### **Gceresult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCommunity_GetGamePersonalDataEntries_Response.cs#L13)

```csharp
uint Gceresult { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

