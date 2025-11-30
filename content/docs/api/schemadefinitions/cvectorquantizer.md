---
title: CVectorQuantizer
---

# Interface CVectorQuantizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVectorQuantizer : ISchemaClass<CVectorQuantizer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CVectorQuantizer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CentroidVectors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L18)

```csharp
ref CUtlVector<float> CentroidVectors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Centroids

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L20)

```csharp
ref int Centroids { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Dimensions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVectorQuantizer.cs#L22)

```csharp
ref int Dimensions { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

