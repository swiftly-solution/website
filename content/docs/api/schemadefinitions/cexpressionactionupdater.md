---
title: CExpressionActionUpdater
---

# Interface CExpressionActionUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CExpressionActionUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CExpressionActionUpdater : CAnimActionUpdater, ISchemaClass<CAnimActionUpdater>, ISchemaClass<CExpressionActionUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimActionUpdater](/docs/api/schemadefinitions/canimactionupdater)
- [ISchemaClass<CAnimActionUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CExpressionActionUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Param

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CExpressionActionUpdater.cs#L18)

```csharp
CAnimParamHandle Param { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### ParamType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CExpressionActionUpdater.cs#L20)

```csharp
ref AnimParamType_t ParamType { get; }
```

#### Property Value

- [AnimParamType_t](/docs/api/schemadefinitions/animparamtype_t)

### Script

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CExpressionActionUpdater.cs#L22)

```csharp
AnimScriptHandle Script { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/schemadefinitions/animscripthandle)

