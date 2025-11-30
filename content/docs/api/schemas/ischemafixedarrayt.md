---
title: ISchemaFixedArray
---

# Interface ISchemaFixedArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Schemas](/docs/api/schemas)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ISchemaFixedArray<T> : ISchemaField, INativeHandle where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Implements

- [ISchemaField](/docs/api/schemas/ischemafield)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ElementAlignment

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L6)

```csharp
int ElementAlignment { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L8)

```csharp
int ElementCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L10)

```csharp
int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L12)

```csharp
ref T this[int index] { get; }
```

#### Property Value

- T

