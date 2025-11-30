---
title: ActiveModelConfig_t
---

# Interface ActiveModelConfig_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ActiveModelConfig_t : ISchemaClass<ActiveModelConfig_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ActiveModelConfig_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AssociatedEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L22)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> AssociatedEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)>>

### AssociatedEntityNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L24)

```csharp
ref CUtlVector<SchemaUntypedField> AssociatedEntityNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### Handle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L18)

```csharp
ModelConfigHandle_t Handle { get; }
```

#### Property Value

- [ModelConfigHandle_t](/docs/api/schemadefinitions/modelconfighandle_t)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AssociatedEntitiesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L28)

```csharp
void AssociatedEntitiesUpdated()
```

### AssociatedEntityNamesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L29)

```csharp
void AssociatedEntityNamesUpdated()
```

### HandleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L26)

```csharp
void HandleUpdated()
```

### NameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L27)

```csharp
void NameUpdated()
```

