---
title: CRenderComponent
---

```csharp
public interface CRenderComponent : CEntityComponent, ISchemaClass<CEntityComponent>, ISchemaClass<CRenderComponent>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EnableRendering** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderComponent.cs#L22)

```csharp
ref bool EnableRendering { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **InterpolationReadyToDraw** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderComponent.cs#L24)

```csharp
ref bool InterpolationReadyToDraw { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsRenderingWithViewModels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderComponent.cs#L18)

```csharp
ref bool IsRenderingWithViewModels { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SplitscreenFlags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderComponent.cs#L20)

```csharp
ref uint SplitscreenFlags { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **__m_pChainEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderComponent.cs#L16)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

- Property Value

- [CNetworkVarChainer](/docs/api/shared/natives/cnetworkvarchainer)

