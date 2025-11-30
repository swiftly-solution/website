---
title: CBodyComponent
---

# Interface CBodyComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBodyComponent : CEntityComponent, ISchemaClass<CEntityComponent>, ISchemaClass<CBodyComponent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CEntityComponent](/docs/api/schemadefinitions/centitycomponent)
- [ISchemaClass<CEntityComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBodyComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### SceneNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponent.cs#L18)

```csharp
CGameSceneNode? SceneNode { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/schemadefinitions/cgamescenenode)?

### __m_pChainEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyComponent.cs#L20)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

#### Property Value

- [CNetworkVarChainer](/docs/api/natives/cnetworkvarchainer)

