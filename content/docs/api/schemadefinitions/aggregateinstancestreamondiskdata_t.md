---
title: AggregateInstanceStreamOnDiskData_t
---

# Interface AggregateInstanceStreamOnDiskData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateInstanceStreamOnDiskData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AggregateInstanceStreamOnDiskData_t : ISchemaClass<AggregateInstanceStreamOnDiskData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AggregateInstanceStreamOnDiskData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BufferData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateInstanceStreamOnDiskData_t.cs#L20)

```csharp
ref CUtlBinaryBlock BufferData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)

### DecodedSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateInstanceStreamOnDiskData_t.cs#L18)

```csharp
ref uint DecodedSize { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

