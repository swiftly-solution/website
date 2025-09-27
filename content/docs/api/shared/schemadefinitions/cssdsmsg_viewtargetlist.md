---
title: CSSDSMsg_ViewTargetList
---

```csharp
public interface CSSDSMsg_ViewTargetList : ISchemaClass<CSSDSMsg_ViewTargetList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Targets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L21)

```csharp
ref CUtlVector Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**ViewId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L16)

```csharp
SceneViewId_t ViewId { get; }
```

#### Property Value

- [SceneViewId_t](/docs/api/shared/schemadefinitions/sceneviewid_t)

**ViewName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSSDSMsg_ViewTargetList.cs#L18)

```csharp
ref CUtlString ViewName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

