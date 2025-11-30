---
title: CPlayerPawnComponent
---

# Interface CPlayerPawnComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPawnComponent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayerPawnComponent : ISchemaClass<CPlayerPawnComponent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Pawn

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayerPawnComponent.cs#L8)

Gets the player pawn associated with this instance.

```csharp
CBasePlayerPawn Pawn { get; }
```

#### Property Value

- [CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)

### __m_pChainEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayerPawnComponent.cs#L18)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

#### Property Value

- [CNetworkVarChainer](/docs/api/natives/cnetworkvarchainer)

