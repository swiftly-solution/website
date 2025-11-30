---
title: IProtobufRepeatedFieldSubMessageType
---

# Interface IProtobufRepeatedFieldSubMessageType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L12)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IProtobufRepeatedFieldSubMessageType<T> : IRepeatedField, IEnumerable<T>, IEnumerable where T : ITypedProtobuf<T>
```

#### Type Parameters

- **T**: 

#### Implements

- [IRepeatedField](/docs/api/netmessages/irepeatedfield)
- [IEnumerable<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)
- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Properties

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L15)

```csharp
int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Add()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L19)

```csharp
T Add()
```

#### Returns

- T

### Get(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L17)

```csharp
T Get(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- T

