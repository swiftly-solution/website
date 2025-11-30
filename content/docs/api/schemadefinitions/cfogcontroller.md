---
title: CFogController
---

# Interface CFogController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFogController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CFogController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFogController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChangedVariables

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L22)

```csharp
ref int ChangedVariables { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Fog

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L18)

```csharp
fogparams_t Fog { get; }
```

#### Property Value

- [fogparams_t](/docs/api/schemadefinitions/fogparams_t)

### UseAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L20)

```csharp
ref bool UseAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### FogUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L24)

```csharp
void FogUpdated()
```

