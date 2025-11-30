---
title: CNETMsg_DebugOverlay
---

# Interface CNETMsg_DebugOverlay

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNETMsg_DebugOverlay : ITypedProtobuf<CNETMsg_DebugOverlay>, INativeHandle, INetMessage<CNETMsg_DebugOverlay>, IDisposable
```

#### Implements

- [ITypedProtobuf<CNETMsg_DebugOverlay>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CNETMsg_DebugOverlay>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Bools

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L33)

```csharp
IProtobufRepeatedFieldValueType<bool> Bools { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### Colors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L24)

```csharp
IProtobufRepeatedFieldValueType<Color> Colors { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[Color](/docs/api/natives/color)>

### Dimensions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L27)

```csharp
IProtobufRepeatedFieldValueType<float> Dimensions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Etype

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L18)

```csharp
int Etype { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Strings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L39)

```csharp
IProtobufRepeatedFieldValueType<string> Strings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### Times

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L30)

```csharp
IProtobufRepeatedFieldValueType<float> Times { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Uint64s

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L36)

```csharp
IProtobufRepeatedFieldValueType<ulong> Uint64s { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[ulong](https://learn.microsoft.com/dotnet/api/system.uint64)>

### Vectors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_DebugOverlay.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<Vector> Vectors { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[Vector](/docs/api/natives/vector)>

