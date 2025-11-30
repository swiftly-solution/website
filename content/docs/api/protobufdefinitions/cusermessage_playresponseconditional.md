---
title: CUserMessage_PlayResponseConditional
---

# Interface CUserMessage_PlayResponseConditional

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessage_PlayResponseConditional : ITypedProtobuf<CUserMessage_PlayResponseConditional>, INativeHandle, INetMessage<CUserMessage_PlayResponseConditional>, IDisposable
```

#### Implements

- [ITypedProtobuf<CUserMessage_PlayResponseConditional>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CUserMessage_PlayResponseConditional>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### EntIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L18)

```csharp
int EntIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EntOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L27)

```csharp
Vector EntOrigin { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MixPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L33)

```csharp
int MixPriority { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerSlots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<int> PlayerSlots { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### PreDelay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L30)

```csharp
float PreDelay { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Response

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L24)

```csharp
string Response { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

