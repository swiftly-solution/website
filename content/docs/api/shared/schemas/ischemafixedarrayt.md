---
title: ISchemaFixedArray
---

```csharp
public interface ISchemaFixedArray<T> : ISchemaField, INativeHandle where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Implements

## Properties

### ElementAlignment

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L6)

```csharp
int ElementAlignment { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L8)

```csharp
int ElementCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L10)

```csharp
int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Schemas/ISchemaFixedArray.cs#L12)

```csharp
ref T this[int index] { get; }
```

#### Property Value

- T

