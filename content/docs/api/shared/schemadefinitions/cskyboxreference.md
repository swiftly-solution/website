---
title: CSkyboxReference
---

```csharp
public interface CSkyboxReference : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSkyboxReference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### SkyCamera

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyboxReference.cs#L20)

```csharp
ref CHandle<CSkyCamera> SkyCamera { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CSkyCamera](/docs/api/shared/schemadefinitions/cskycamera)>

### WorldGroupId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSkyboxReference.cs#L18)

```csharp
ref uint WorldGroupId { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

