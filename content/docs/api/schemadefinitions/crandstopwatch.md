---
title: CRandStopwatch
---

# Interface CRandStopwatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRandStopwatch.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRandStopwatch : CStopwatchBase, CSimpleSimTimer, ISchemaClass<CSimpleSimTimer>, ISchemaClass<CStopwatchBase>, ISchemaClass<CRandStopwatch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CStopwatchBase](/docs/api/schemadefinitions/cstopwatchbase)
- [CSimpleSimTimer](/docs/api/schemadefinitions/csimplesimtimer)
- [ISchemaClass<CSimpleSimTimer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CStopwatchBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRandStopwatch>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MaxInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRandStopwatch.cs#L20)

```csharp
ref float MaxInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRandStopwatch.cs#L18)

```csharp
ref float MinInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

