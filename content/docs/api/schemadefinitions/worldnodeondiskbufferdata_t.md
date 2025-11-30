---
title: WorldNodeOnDiskBufferData_t
---

# Interface WorldNodeOnDiskBufferData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface WorldNodeOnDiskBufferData_t : ISchemaClass<WorldNodeOnDiskBufferData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<WorldNodeOnDiskBufferData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Data

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L24)

```csharp
ref CUtlVector<byte> Data { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### ElementCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L18)

```csharp
ref int ElementCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSizeInBytes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L20)

```csharp
ref int ElementSizeInBytes { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InputLayoutFields

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WorldNodeOnDiskBufferData_t.cs#L22)

```csharp
ref CUtlVector<RenderInputLayoutField_t> InputLayoutFields { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RenderInputLayoutField_t](/docs/api/schemadefinitions/renderinputlayoutfield_t)>

