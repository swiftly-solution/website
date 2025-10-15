---
title: CVectorQuantizer
---

```csharp
public interface CVectorQuantizer : ISchemaClass<CVectorQuantizer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CentroidVectors

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L17)

```csharp
ref CUtlVector<float> CentroidVectors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Centroids

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L19)

```csharp
ref int Centroids { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Dimensions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L21)

```csharp
ref int Dimensions { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

