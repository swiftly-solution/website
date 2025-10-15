---
title: IProtobufRepeatedFieldSubMessageType
---

```csharp
public interface IProtobufRepeatedFieldSubMessageType<T> : IRepeatedField, IEnumerable<T>, IEnumerable where T : ITypedProtobuf<T>
```

#### Type Parameters

- **T**: 

#### Implements

## Properties

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L15)

```csharp
int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Add()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L19)

```csharp
T Add()
```

#### Returns

- T

### Get(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/IProtobufRepeatedField.cs#L17)

```csharp
T Get(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- T

