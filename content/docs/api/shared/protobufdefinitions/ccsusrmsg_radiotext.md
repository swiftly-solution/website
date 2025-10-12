---
title: CCSUsrMsg_RadioText
---

```csharp
public interface CCSUsrMsg_RadioText : ITypedProtobuf<CCSUsrMsg_RadioText>, INativeHandle, INetMessage<CCSUsrMsg_RadioText>, IDisposable
```

#### Implements

## Properties

### Client

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RadioText.cs#L21)

```csharp
int Client { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MsgDst

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RadioText.cs#L18)

```csharp
int MsgDst { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MsgName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RadioText.cs#L24)

```csharp
string MsgName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Params

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RadioText.cs#L27)

```csharp
IProtobufRepeatedFieldValueType<string> Params { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

