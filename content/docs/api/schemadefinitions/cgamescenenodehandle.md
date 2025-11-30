---
title: CGameSceneNodeHandle
---

# Interface CGameSceneNodeHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameSceneNodeHandle : ISchemaClass<CGameSceneNodeHandle>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CGameSceneNodeHandle>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L20)

```csharp
ref CUtlStringToken Name { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L18)

```csharp
ref CHandle<CEntityInstance> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

## Methods

### NameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L23)

```csharp
void NameUpdated()
```

### OwnerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L22)

```csharp
void OwnerUpdated()
```

