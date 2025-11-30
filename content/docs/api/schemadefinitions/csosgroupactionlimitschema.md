---
title: CSosGroupActionLimitSchema
---

# Interface CSosGroupActionLimitSchema

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSosGroupActionLimitSchema : CSosGroupActionSchema, ISchemaClass<CSosGroupActionSchema>, ISchemaClass<CSosGroupActionLimitSchema>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSosGroupActionSchema](/docs/api/schemadefinitions/csosgroupactionschema)
- [ISchemaClass<CSosGroupActionSchema>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSosGroupActionLimitSchema>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CountStopped

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L26)

```csharp
ref bool CountStopped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L18)

```csharp
ref int MaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SortType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L22)

```csharp
ref SosActionLimitSortType_t SortType { get; }
```

#### Property Value

- [SosActionLimitSortType_t](/docs/api/schemadefinitions/sosactionlimitsorttype_t)

### StopImmediate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L24)

```csharp
ref bool StopImmediate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StopType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L20)

```csharp
ref SosActionStopType_t StopType { get; }
```

#### Property Value

- [SosActionStopType_t](/docs/api/schemadefinitions/sosactionstoptype_t)

