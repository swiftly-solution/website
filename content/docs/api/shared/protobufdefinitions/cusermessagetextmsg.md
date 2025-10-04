---
title: CUserMessageTextMsg
---

```csharp
public interface CUserMessageTextMsg : ITypedProtobuf<CUserMessageTextMsg>, INativeHandle, INetMessage<CUserMessageTextMsg>, IDisposable
```

#### Implements

## Properties

**Dest** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageTextMsg.cs#L18)

```csharp
uint Dest { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Param** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageTextMsg.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<string> Param { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

