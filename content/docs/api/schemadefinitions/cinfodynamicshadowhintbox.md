---
title: CInfoDynamicShadowHintBox
---

# Interface CInfoDynamicShadowHintBox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHintBox.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CInfoDynamicShadowHintBox : CInfoDynamicShadowHint, CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CInfoDynamicShadowHint>, ISchemaClass<CInfoDynamicShadowHintBox>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CInfoDynamicShadowHint](/docs/api/schemadefinitions/cinfodynamicshadowhint)
- [CPointEntity](/docs/api/schemadefinitions/cpointentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CInfoDynamicShadowHint>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CInfoDynamicShadowHintBox>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoxMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHintBox.cs#L20)

```csharp
ref Vector BoxMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoxMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoDynamicShadowHintBox.cs#L18)

```csharp
ref Vector BoxMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

