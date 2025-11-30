---
title: CProductQuantizer
---

# Interface CProductQuantizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CProductQuantizer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CProductQuantizer : ISchemaClass<CProductQuantizer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CProductQuantizer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Dimensions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CProductQuantizer.cs#L20)

```csharp
ref int Dimensions { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SubQuantizers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CProductQuantizer.cs#L18)

```csharp
ref CUtlVector<CVectorQuantizer> SubQuantizers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CVectorQuantizer](/docs/api/schemadefinitions/cvectorquantizer)>

