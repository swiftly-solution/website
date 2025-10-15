---
title: AggregateInstanceStreamOnDiskData_t
---

```csharp
public interface AggregateInstanceStreamOnDiskData_t : ISchemaClass<AggregateInstanceStreamOnDiskData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BufferData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateInstanceStreamOnDiskData_t.cs#L19)

```csharp
ref CUtlBinaryBlock BufferData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

### DecodedSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateInstanceStreamOnDiskData_t.cs#L17)

```csharp
ref uint DecodedSize { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

