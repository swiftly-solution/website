---
title: CSosGroupActionLimitSchema
---

```csharp
public interface CSosGroupActionLimitSchema : CSosGroupActionSchema, ISchemaClass<CSosGroupActionSchema>, ISchemaClass<CSosGroupActionLimitSchema>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CountStopped

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L24)

```csharp
ref bool CountStopped { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L16)

```csharp
ref int MaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SortType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L20)

```csharp
ref SosActionSortType_t SortType { get; }
```

#### Property Value

- [SosActionSortType_t](/docs/api/shared/schemadefinitions/sosactionsorttype_t)

### StopImmediate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L22)

```csharp
ref bool StopImmediate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StopType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosGroupActionLimitSchema.cs#L18)

```csharp
ref SosActionStopType_t StopType { get; }
```

#### Property Value

- [SosActionStopType_t](/docs/api/shared/schemadefinitions/sosactionstoptype_t)

