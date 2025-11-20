---
title: WorldNodeOnDiskBufferData_t
---

```csharp
public interface WorldNodeOnDiskBufferData_t : ISchemaClass<WorldNodeOnDiskBufferData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Data

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L24)

```csharp
ref CUtlVector<byte> Data { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### ElementCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L18)

```csharp
ref int ElementCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSizeInBytes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L20)

```csharp
ref int ElementSizeInBytes { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InputLayoutFields

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L22)

```csharp
ref CUtlVector<RenderInputLayoutField_t> InputLayoutFields { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RenderInputLayoutField_t](/docs/api/shared/schemadefinitions/renderinputlayoutfield_t)>

